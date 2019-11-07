import { OrderModel } from "../models/OrderModel";

export interface OrderRepositoryInterface {
    getOrderList(page: Number, perPage: Number, query: object, sort?: object): Promise<{ data: OrderModel[], total: Number }>;

    getOrderDetail(condition: object): Promise<OrderModel>;
}