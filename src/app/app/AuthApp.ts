import { Injectable, UnauthorizedException } from "@nestjs/common";

import { RetailerUser } from "../../domain/models/UserModel";
import { UserSQLRepository } from "../../infra/repositories/sql/UserSQLRepository";
import { AuthCallbackDTO } from "../dto/auth/UserDetailDTO copy";
import { FirebaseService } from "../../infra/services/FirebaseService";
import { IFirebaseToken } from "../types/AuthTypes";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import { JWTService } from "../../infra/services/JWTService";
import { IRefreshToken } from "src/infra/types/JWTType";

@Injectable()
export class AuthApp {
    constructor(
        private readonly UserSQLRepo: UserSQLRepository,
        private readonly FirebaseService: FirebaseService
    ) { }

    public async callback(dto: AuthCallbackDTO): Promise<any> {
        let firebaseUser: IFirebaseToken;
        let retailUser: RetailerUser | null;

        try {
            firebaseUser = await FirebaseService.getInstance().auth().verifyIdToken(dto.token);
        } catch (err) {
            throw new UnauthorizedException('INVALID_TOKEN');
        }

        retailUser = await this.UserSQLRepo.getOneBy({
            user_id: firebaseUser.uid
        });
        if (!retailUser) {
            throw new UserNotFoundException(firebaseUser.uid);
        }

        const token: string = await JWTService.generateToken({
            eid: retailUser.getEntityId(),
            uid: retailUser.getUserId()
        });
        const refreshToken: IRefreshToken = await JWTService.generateRefreshToken();

        // Update Refresh Token
        await this.UserSQLRepo.update({
            user_id: firebaseUser.uid
        }, {
            refresh_token: refreshToken.token
        })

        await FirebaseService.getInstance().auth().revokeRefreshTokens(firebaseUser.uid);
        
        return {
            message: 'callback success',
            data: {
                token,
                refresh_token: refreshToken.token,
                expires_in: Number(process.env.JWT_LIFETIME),
                is_profile_completed: retailUser.isIsProfileCompleted(),
                has_pin: retailUser.getPin() ? true : false
            }
        };
    }
}