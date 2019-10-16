import { Injectable } from "@nestjs/common";
import { OrderNotFoundException } from "../exceptions/OrderNotFoundException";
import { OrderListDTO } from "../dto/order/OrderListDTO";
import { OrderDetailDTO } from "../dto/order/OrderDetailDTO";
import { Order } from '../../domain/model/OrderModel';
import { OrderElasticRepository } from "../../infra/repositories/elastic/OrderElasticRepository";
import { OrderInfraHelper } from "../../infra/helpers/OrderInfraService";

@Injectable()
export class OrderApp {
    constructor(
        private readonly OrderElasticRepo: OrderElasticRepository,
        private readonly OrderInfraService: OrderInfraHelper
    ) { }

    public async orderList(dto: OrderListDTO): Promise<any> {
        const query = this.OrderInfraService.generateOrderFilters({ order_id: dto.order_id }, dto.buyer_id);
        const orders = await this.OrderElasticRepo.getOrderList(dto.page, dto.per_page, query.query);
        return orders;
    }

    public async orderDetail(dto: OrderDetailDTO): Promise<Order> {
        const order = await Order.create('E33DLDW86', '20190925231547015', 0, 'done', 20000, 'NoID', 'NoName');
        if (!order) {
            throw new OrderNotFoundException(dto.order_id);
        }

        return order;
    }
}