import { DTOInterface } from "../DTOInterface";

export class OrderListDTO implements DTOInterface {
    public buyerId: string;
    public page: number;
    public perPage: number;
    public orderId: string;
    public orderNumber: string;
    public status: string;
    public sort: string;

    constructor(
        buyerId: string,
        page: number = 1,
        perPage: number = 20,
        orderId: string,
        orderNumber: string,
        status: string,
        sort: string
    ) {
        this.buyerId = buyerId;
        this.page = page;
        this.perPage = perPage;
        this.orderId = orderId;
        this.orderNumber = orderNumber;
        this.status = status;
        this.sort = sort;
    }
}