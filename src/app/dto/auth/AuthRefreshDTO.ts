import { DTOInterface } from "../DTOInterface";

export class AuthRefreshDTO implements DTOInterface {
    public refresh_token: string;

    constructor(
        refresh_token: string
    ) {
        this.refresh_token = refresh_token;
    }
}