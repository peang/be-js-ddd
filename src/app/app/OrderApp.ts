import { Injectable } from "@nestjs/common";

import { OrderNotFoundException } from "../exceptions/OrderNotFoundException";
import { OrderListDTO } from "../dto/order/OrderListDTO";
import { OrderDetailDTO } from "../dto/order/OrderDetailDTO";
import { OrderModel } from '../../domain/models/OrderModel';
import { OrderInfraHelper } from "../../infra/helpers/OrderInfraService";
import { OrderElasticRepository } from "../../infra/repositories/elastic/OrderElasticRepository";

@Injectable()
export class OrderApp {
    constructor(
        private readonly OrderElasticRepo: OrderElasticRepository
    ) { }

    public async orderList(dto: OrderListDTO): Promise<any> {
        const query = OrderInfraHelper.generateOrderElasticFilters({ order_id: dto.order_id }, dto.buyer_id);
        const orders = await this.OrderElasticRepo.getOrderList(dto.page, dto.per_page, query.query);

        return orders;
    }

    public async orderDetail(dto: OrderDetailDTO): Promise<OrderModel> {
        const query = OrderInfraHelper.generateOrderElasticFilters({ order_number: dto.order_number }, dto.buyer_id);
        const order = await this.OrderElasticRepo.getOrderDetail(query.query);
        
        if (!order) {
            throw new OrderNotFoundException(dto.order_number);
        }

        return order;
    }
}