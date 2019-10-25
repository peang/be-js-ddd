import { DTOInterface } from "../DTOInterface";

export class EntityRelationDetailDTO implements DTOInterface {
    public buyerId: string;
    public sellerId: string;

    constructor(
        buyerId: string,
        sellerId: string
    ) {
        this.buyerId = buyerId;
        this.sellerId = sellerId;
    }
}