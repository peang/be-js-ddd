import { IToken, IRefreshToken, IContext } from '../types/JWTType';

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as random from 'randomstring';
import * as moment from 'moment';
import * as bcrypt from 'bcryptjs';

const salt = 10;
const refreshLength = 50;
const refreshLifeTime = 7; // days

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: Function) {
        const token: string | undefined = req.headers.authorization;
        if (!token) {
            throw new UnauthorizedException('TOKEN_NOT_PROVIDED');
        }

        try {
            const tokenPayload: IToken = await this.verifyToken(token);
            req['context'] = await this.generateContext(tokenPayload);
        } catch (err) {
            const message = err.message === 'JWT_EXPIRED' ? 'TOKEN_EXPIRED' : 'INVALID_TOKEN';
            throw new UnauthorizedException(message);
        }

        next();
    }

    async generateContext(payload: IToken): Promise<IContext> {
        return {
            entity_id: payload.eid,
            user_id: payload.uid
        };
    };

    generateToken(credentials: IToken) {
        return jwt.sign(credentials, String(process.env.JWT_SECRET), { expiresIn: Number(process.env.JWT_LIFETIME) });
    }

    async verifyToken(token: string) {
        return jwt.verify(token, String(process.env.JWT_SECRET));
    }

    generateRefreshToken(): IRefreshToken {
        return {
            token: random.generate(refreshLength),
            valid_until: moment().add(refreshLifeTime, 'days').utc().format()
        };
    }

    generateHash(password: string): string {
        return bcrypt.hashSync(password, salt);
    }

    validatePassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    };
}
