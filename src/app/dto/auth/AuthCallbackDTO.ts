import { DTOInterface } from "../DTOInterface";

export class AuthCallbackDTO implements DTOInterface {
    public token: string;

    constructor(
        token: string
    ) {
        this.token = token;
    }
}