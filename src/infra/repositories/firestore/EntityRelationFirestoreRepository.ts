import BaseFirestoreRepository from "../base/BaseFirestoreRepository";
import { EntityRelationRepositoryInterface } from "../../../domain/repositories/EntityRelationRepositoryInterface";
import { EntityRelationModel } from "../../../domain/models/EntityRelationModel";
import { EntityFirestoreRepository } from "./EntityFirestoreRepository";

import { QuerySnapshot, QueryDocumentSnapshot } from "@google-cloud/firestore";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EntityRelationFirestoreRepository extends BaseFirestoreRepository implements EntityRelationRepositoryInterface {
    constructor(
        private readonly EntityFirestoreRepo: EntityFirestoreRepository
    ) {
        super('relation');
    }

    public async getEntityRelationDetail(buyerId: string, sellerId: string): Promise<EntityRelationModel> {
        const retailerRef = await this.fsclient.collection(this.EntityFirestoreRepo.getPath()).doc(buyerId);
        const wholesalerRef = await this.fsclient.collection(this.EntityFirestoreRepo.getPath()).doc(sellerId);
        
        return this.fsclient.collection(this.path)
            .where('retailerId', '==', retailerRef)
            .where('wholesalerId', '==', wholesalerRef)
            .get()
            .then((snapshot: QuerySnapshot) => !snapshot.empty ? snapshot.docs[0] : undefined)
            .then((row: QueryDocumentSnapshot | undefined) => row ? row.data() : undefined);
    }

}