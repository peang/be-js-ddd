import { RetailerUserModel } from "../models/RetailerUserModel";

export interface RetailerUserRepositoryInterface {
    getRetailerUserList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: RetailerUserModel[], total: number }>;

    getRetailerUserDetail(condition: object): Promise<RetailerUserModel>;

    updateRetailerUser(payload: object, condition: object): Promise<void>;
}