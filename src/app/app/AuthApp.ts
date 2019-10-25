import { RetailerUserModel } from "../../domain/models/RetailerUserModel";
import { RetailerUserSQLRepository } from "../../infra/repositories/sql/RetailerUserSQLRepository";
import { AuthCallbackDTO } from "../dto/auth/AuthCallbackDTO";
import { AuthRefreshDTO } from "../dto/auth/AuthRefreshDTO";
import { FirestoreService } from "../../infra/services/FirestoreService";
import { IFirebaseToken } from "../types/AuthTypes";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import { JWTService } from "../../infra/services/JWTService";
import { IRefreshToken } from "src/infra/types/JWTType";

import { Injectable, UnauthorizedException, BadRequestException } from "@nestjs/common";

@Injectable()
export class AuthApp {
    constructor(
        private readonly UserSQLRepo: RetailerUserSQLRepository
    ) { }

    public async callback(dto: AuthCallbackDTO): Promise<any> {
        let firebaseUser: IFirebaseToken;
        let retailUser: RetailerUserModel | null;

        try {
            firebaseUser = await FirestoreService.getInstance().auth().verifyIdToken(dto.token);
        } catch (err) {
            throw new UnauthorizedException('INVALID_TOKEN');
        }

        retailUser = await this.UserSQLRepo.getRetailerUserDetail({
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

        await FirestoreService.getInstance().auth().revokeRefreshTokens(firebaseUser.uid);

        return {
            token,
            refresh_token: refreshToken.token,
            expires_in: Number(process.env.JWT_LIFETIME),
            is_profile_completed: retailUser.isIsProfileCompleted(),
            has_pin: retailUser.getPin() ? true : false
        };
    }

    public async refresh(dto: AuthRefreshDTO): Promise<any> {
        let retailUser: RetailerUserModel | null = await this.UserSQLRepo.getRetailerUserDetail({
            refresh_token: dto.refreshToken
        });

        if (!retailUser) {
            throw new BadRequestException('INVALID_TOKEN');
        }

        /** generate jwt token and refresh token */
        const token: string = await JWTService.generateToken({
            eid: retailUser.getEntityId(),
            uid: retailUser.getUserId()
        });
        const refreshToken: IRefreshToken = await JWTService.generateRefreshToken();

        // Update Refresh Token
        await this.UserSQLRepo.update({
            user_id: retailUser.getUserId()
        }, {
            refresh_token: refreshToken.token
        })

        await FirestoreService.getInstance().auth().revokeRefreshTokens(retailUser.getUserId());

        return {
            token,
            refresh_token: refreshToken.token,
            expires_in: Number(process.env.JWT_LIFETIME),
            is_profile_completed: retailUser.isIsProfileCompleted(),
            has_pin: retailUser.getPin() ? true : false
        };
    }

}