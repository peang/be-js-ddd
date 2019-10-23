import { IToken, IRefreshToken } from "../types/JWTType";

import * as jwt from 'jsonwebtoken';
import * as random from 'randomstring';
import * as moment from 'moment';
import * as bcrypt from 'bcryptjs';

const salt = 10;
const refreshLength = 50;
const refreshLifeTime = 7; // days

export class JWTService {
    static async generateToken(credentials: IToken) {
        return jwt.sign(credentials, String(process.env.JWT_SECRET), { expiresIn: Number(process.env.JWT_LIFETIME) });
    }

    static async verifyToken(token: string) {
        return jwt.verify(token, String(process.env.JWT_SECRET));
    }

    static async generateRefreshToken(): Promise<IRefreshToken> {
        return {
            token: random.generate(refreshLength),
            valid_until: moment().add(refreshLifeTime, 'days').utc().format()
        };
    }

    static async generateHash(password: string): Promise<string> {
        return bcrypt.hashSync(password, salt);
    }
}