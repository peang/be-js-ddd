import { EntityModel } from "../models/EntityModel";

export interface EntityRepositoryInterface {
    getEntityList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: EntityModel[], total: number }>;

    getEntityDetail(entityId: string): Promise<EntityModel>;
}