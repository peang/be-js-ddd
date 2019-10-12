import { Injectable } from "@nestjs/common";
import { OrderElasticRepository } from "../../infra/repositories/OrderElasticRepository";
import { OrderNotFoundException } from "../exceptions/OrderNotFoundException";
import { OrderListDTO } from "../dto/order/OrderListDTO";
import { OrderDetailDTO } from "../dto/order/OrderDetailDTO";
import { Order } from '../../domain/model/OrderModel';
import { OrderInfraService } from "../../infra/services/OrderInfraService";

@Injectable()
export class OrderApp {
    constructor(private readonly orderElasticRepo: OrderElasticRepository, private readonly orderInfraService: OrderInfraService) { }

    public async orderList(dto: OrderListDTO): Promise<any> {
        const query = this.orderInfraService.generateOrderFilters({order_id: dto.order_id}, dto.buyer_id);
        const orders = await this.orderElasticRepo.getOrderList(dto.page, dto.per_page, query.query);
        return orders;
    }

    public async orderDetail(dto: OrderDetailDTO): Promise<Order> {
        const order = await Order.create();
        if (!order) {
            throw new OrderNotFoundException(dto.order_id);
        }

        return order;
    }
}