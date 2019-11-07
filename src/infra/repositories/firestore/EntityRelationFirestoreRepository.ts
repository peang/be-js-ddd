import BaseFirestoreRepository from "../base/BaseFirestoreRepository";
import { EntityRelationRepositoryInterface } from "../../../domain/repositories/EntityRelationRepositoryInterface";
import { EntityRelationReadModel } from "../../../infra/models/read/EntityRelationReadModel";
import { EntityFirestoreRepository } from "./EntityFirestoreRepository";

import { QuerySnapshot, QueryDocumentSnapshot } from "@google-cloud/firestore";
import { Injectable, Inject } from "@nestjs/common";


@Injectable()
export class EntityRelationFirestoreRepository extends BaseFirestoreRepository implements EntityRelationRepositoryInterface {
    constructor(
        @Inject('EntityFirestoreRepository') private readonly EntityFirestoreRepo: EntityFirestoreRepository
    ) {
        super('relation');
    }

    public async getEntityRelationDetail(buyerId: String, sellerId: String): Promise<EntityRelationReadModel | null> {
        const retailerRef = await this.fsclient.collection(this.EntityFirestoreRepo.getPath()).doc(buyerId);
        const wholesalerRef = await this.fsclient.collection(this.EntityFirestoreRepo.getPath()).doc(sellerId);

        const entityRelationFS:EntityRelationReadModel = await this.fsclient.collection(this.path)
            .where('retailerId', '==', retailerRef)
            .where('wholesalerId', '==', wholesalerRef)
            .get()
            .then((snapshot: QuerySnapshot) => !snapshot.empty ? snapshot.docs[0] : undefined)
            .then((row: QueryDocumentSnapshot | undefined) => row ? row.data() : undefined);

        console.log(entityRelationFS);
        return entityRelationFS;
    }

}