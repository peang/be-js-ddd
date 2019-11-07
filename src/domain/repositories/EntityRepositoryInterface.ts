import { EntityModel } from "../models/EntityModel";

export interface EntityRepositoryInterface {
    getEntityList(page: Number, perPage: Number, query: object, sort?: object): Promise<{ data: EntityModel[], total: Number }>;

    getEntityDetail(entityId: string): Promise<EntityModel>;
}