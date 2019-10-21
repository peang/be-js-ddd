import { IToken } from '../../infra/types/JWTType';
import { JWTService } from '../../infra/services/JWTService';
import { IContext } from '../types/CommonType';

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: Function) {
        const token: string | undefined = req.headers.authorization;
        if (!token) {
            throw new UnauthorizedException('TOKEN_NOT_PROVIDED');
        }

        try {
            const tokenPayload: IToken = await JWTService.verifyToken(token);
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
}
