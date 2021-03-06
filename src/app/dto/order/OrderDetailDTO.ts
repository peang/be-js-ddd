import { DTOInterface } from "../DTOInterface";

export class OrderDetailDTO implements DTOInterface {
    public buyerId: string;
    public orderNumber: string;

    constructor(
        buyerId: string,
        orderNumber: string
    ) {
        this.buyerId = buyerId;
        this.orderNumber = orderNumber;
    }
}