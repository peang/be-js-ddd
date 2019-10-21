import { Order } from '../../domain/model/OrderModel';
import BaseTransformer from './BaseTransformer';

export class OrderTransformer extends BaseTransformer {
    public static async transformDetail(order: Order) {
        return {
            id: order.getId(),
            buyer_id: order.getBuyerId(),
            order_number: order.getOrderNumber(),
            order_id: order.getOrderNumber(),
            order_type: order.getOrderType(),
            status: order.getStatus(),
            total: order.getTotal(),
            wholesaler_id: order.getWholesalerId(),
            wholesaler_name: order.getWholesalerName(),
            created_at: order.getCratedAt(),
            updated_at: order.getUpdatedAt()
        };
    }

    public static async transformList(orders: [Order]) {
        const data = [];
        await orders.forEach((order) => {
            data.push({
                id: order.getId(),
                buyer_id: order.getBuyerId(),
                order_number: order.getOrderNumber(),
                order_type: order.getOrderType(),
                status: order.getStatus(),
                total: order.getTotal(),
                wholesaler_id: order.getWholesalerId(),
                wholesaler_name: order.getWholesalerName()
            });
        });
        return data;
    }
}
