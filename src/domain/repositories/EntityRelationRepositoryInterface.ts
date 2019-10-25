import { EntityRelationModel } from "../models/EntityRelationModel";

export interface EntityRelationRepositoryInterface {
    getEntityRelationDetail(buyerId: string, sellerId: string): Promise<EntityRelationModel>;
}