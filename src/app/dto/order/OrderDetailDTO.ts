import { DTOInterface } from "../DTOInterface";

export class OrderDetailDTO implements DTOInterface {
    public buyer_id: string;

    public order_number: string;

    constructor(
        buyer_id: string,
        order_number: string
    ) {
        this.buyer_id = buyer_id;
        this.order_number = order_number;
    }
}