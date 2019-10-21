import { DTOInterface } from "../DTOInterface";

export class UserDetailDTO implements DTOInterface {
    public user_id: string;

    constructor(
        user_id: string
    ) {
        this.user_id = user_id;
    }
}