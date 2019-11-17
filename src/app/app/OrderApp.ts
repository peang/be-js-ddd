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
        const query = OrderInfraHelper.generateOrderElasticFilters({ order_id: dto.orderId }, dto.buyerId);
        const { data: orders, total } = await this.OrderElasticRepo.getOrderList(dto.page, dto.perPage, query.query);

        return {
            data: orders,
            meta: {
                page: Number(dto.page),
                per_page: Number(dto.perPage),
                total_data: Number(total),
                total_page: Math.ceil(total / dto.perPage)
            }
        };
    }

    public async orderDetail(dto: OrderDetailDTO): Promise<OrderModel> {
        const query = OrderInfraHelper.generateOrderElasticFilters({ order_number: dto.orderNumber }, dto.buyerId);
        const order = await this.OrderElasticRepo.getOrderDetail(query.query);

        if (!order) {
            throw new OrderNotFoundException(dto.orderNumber);
        }

        return order;
    }
}