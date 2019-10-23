import BaseFirestoreRepository from "../base/BaseFirestoreRepository";
import { EntityModel } from "../../../domain/models/EntityModel";
import { EntityRepositoryInterface } from "../../../domain/repositories/EntityRepositoryInterface";

export class EntityFirestoreRepository extends BaseFirestoreRepository implements EntityRepositoryInterface {
    getEntityList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: EntityModel[], total: number }> {
        throw new Error("Method not implemented.");
    }

    getEntityDetail(condition: object): Promise<EntityModel> {
        throw new Error("Method not implemented.");
    }
}