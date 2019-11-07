import { EntityRelationReadModel } from "../../infra/models/read/EntityRelationReadModel";

export interface EntityRelationRepositoryInterface {
    getEntityRelationDetail(buyerId: string, sellerId: string): Promise<EntityRelationReadModel>;
}