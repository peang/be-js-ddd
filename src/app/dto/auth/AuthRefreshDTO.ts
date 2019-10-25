import { DTOInterface } from "../DTOInterface";

export class AuthRefreshDTO implements DTOInterface {
    public refreshToken: string;

    constructor(
        refreshToken: string
    ) {
        this.refreshToken = refreshToken;
    }
}