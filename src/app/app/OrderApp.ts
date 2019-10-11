import { Injectable } from "@nestjs/common";
import { OrderElasticRepository } from "../../infra/repositories/OrderElasticRepository";
import { OrderNotFoundException } from "../exceptions/OrderNotFoundException";
import { OrderListData, OrderDetailData } from "../types/OrderTypes";
import { OrderListDTO } from "../dto/order/OrderListDTO";

@Injectable()
export class OrderApp {
    constructor(private readonly OrderElasticRepo: OrderElasticRepository) { }

    public async orderList(dto: OrderListDTO): Promise<object> {
        const orders = await this.OrderElasticRepo.getOrderList(1, 10, {
            "match_all": {}
        });
        return orders;
    }

    public async orderDetail(data: OrderDetailData): Promise<Order> {
        const order = await Order.create();
        if (!order) {
            throw new OrderNotFoundException(data.orderId);
        }

        return order;
    }
}