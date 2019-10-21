import { DTOInterface } from "../DTOInterface";

export class OrderListDTO implements DTOInterface {
    public buyer_id: string;
    public page: number;
    public per_page: number;
    public order_id: string;
    public order_number: string;
    public status: string;
    public sort: string;

    constructor(
        buyer_id: string,
        page: number = 1,
        per_page: number = 20,
        order_id: string,
        order_number: string,
        status: string,
        sort: string
    ) {
        this.buyer_id = buyer_id;
        this.page = page;
        this.per_page = per_page;
        this.order_id = order_id;
        this.order_number = order_number;
        this.status = status;
        this.sort = sort;
    }
}