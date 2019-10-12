import { DTOInterface } from "../DTOInterface";

export class OrderDetailDTO implements DTOInterface {
    public order_id: string;

    constructor(
        order_id: string
    ) {
        this.order_id = order_id;
    }
}