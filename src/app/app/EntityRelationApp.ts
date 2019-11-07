import { EntityRelationDetailDTO } from "../dto/entity-relation/EntityRelationDetailDTO";
import { EntityRepositoryInterface } from "../../domain/repositories/EntityRepositoryInterface";
import { EntityRelationRepositoryInterface } from "../../domain/repositories/EntityRelationRepositoryInterface";

import { Injectable, NotFoundException, Inject } from "@nestjs/common";

@Injectable()
export class EntityRelationApp {
    constructor(
        @Inject('EntityFirestoreRepository') private readonly EntityRepo: EntityRepositoryInterface,
        @Inject('EntityRelationFirestoreRepository') private readonly EntityRelationRepo: EntityRelationRepositoryInterface
    ) { }

    public async entityRelationDetail(dto: EntityRelationDetailDTO): Promise<any> {
        const seller = await this.EntityRepo.getEntityDetail(dto.sellerId);
        if (!seller) {
            throw new NotFoundException('STORE_NOT_FOUND');
        }

        const membership = await this.EntityRelationRepo.getEntityRelationDetail(dto.buyerId, dto.sellerId);
        if (!membership) {
            throw new NotFoundException('MEMBERSHIP_NOT_FOUND');
        };

        return this.EntityRelationRepo.getEntityRelationDetail(dto.buyerId, dto.sellerId);
    }
}