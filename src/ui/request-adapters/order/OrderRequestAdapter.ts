import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { OrderListDTO } from "../../../app/dto/order/OrderListDTO";
import { BadRequestException } from "@nestjs/common";

export class OrderListRequestAdapter implements RequestAdapterInterface {
    public async getDTO(): Promise<OrderListDTO> {
        return new OrderListDTO();
    }

    public validate(data: object): boolean | BadRequestException {
        return true;
    }
}