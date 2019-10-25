import { EntityRelationDetailDTO } from "../dto/entity-relation/EntityRelationDetailDTO";
import { EntityRelationFirestoreRepository } from "../../infra/repositories/firestore/EntityRelationFirestoreRepository";
import { EntityFirestoreRepository } from "../../infra/repositories/firestore/EntityFirestoreRepository";

import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class EntityRelationApp {
    constructor(
        private readonly EntityFirestoreRepo: EntityFirestoreRepository,
        private readonly EntityRelationFirestoreRepo: EntityRelationFirestoreRepository
    ) { }

    public async entityRelationDetail(dto: EntityRelationDetailDTO): Promise<any> {
        const seller = await this.EntityFirestoreRepo.getEntityDetail(dto.sellerId);
        if (!seller) {
            throw new NotFoundException('STORE_NOT_FOUND');
        }

        const membership = await this.EntityRelationFirestoreRepo.getEntityRelationDetail(dto.buyerId, dto.sellerId);
        if (!membership) {
            throw new NotFoundException('MEMBERSHIP_NOT_FOUND');
        };

        // return this.EntityRelationFirestoreRepo.getEntityRelationDetail(dto.buyerId, dto.sellerId);
    }
}