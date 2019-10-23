import { UserModel } from "../models/UserModel";

export interface UserRepositoryInterface {
    getUserList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: UserModel[], total: number }>;

    getUserDetail(condition: object): Promise<UserModel>;
}