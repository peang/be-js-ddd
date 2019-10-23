import BaseFirestoreRepository from "../base/BaseFirestoreRepository";
import { UserRepositoryInterface } from "../../../domain/repositories/UserRepositoryInterface";
import { UserModel } from "../../../domain/models/UserModel";

export class UserFirestoreRepository extends BaseFirestoreRepository implements UserRepositoryInterface {
    getUserList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: UserModel[], total: number }> {
        throw new Error("Method not implemented.");
    }

    getUserDetail(condition: object): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
}