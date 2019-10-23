import { OrderModel } from "../models/OrderModel";

export interface OrderRepositoryInterface {
    getOrderList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: OrderModel[], total: number }>;

    getOrderDetail(condition: object): Promise<OrderModel>;
}