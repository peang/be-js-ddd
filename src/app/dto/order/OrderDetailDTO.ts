import { DTOInterface } from "../DTOInterface";

export class OrderDetailDTO implements DTOInterface {
    public buyer_id: string;

    public order_id: string;

    constructor(
        buyer_id: string,
        order_id: string
    ) {
        this.buyer_id = buyer_id;
        this.order_id = order_id;
    }
}