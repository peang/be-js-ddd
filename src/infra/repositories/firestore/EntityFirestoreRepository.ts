import BaseFirestoreRepository from "../base/BaseFirestoreRepository";
import { EntityModel } from "../../../domain/models/EntityModel";
import { EntityKTP } from "../../../domain/value-objects/EntityKTP";
import { EntityRepositoryInterface } from "../../../domain/repositories/EntityRepositoryInterface";
import { Injectable } from "@nestjs/common";
import { firestore } from "firebase-admin";

@Injectable()
export class EntityFirestoreRepository extends BaseFirestoreRepository implements EntityRepositoryInterface {
    constructor() {
        super('entity');
    }

    async getEntityList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: EntityModel[], total: number }> {
        throw new Error("Method not implemented.");
    }

    async getEntityDetail(entityId: string): Promise<EntityModel> {
        const entity = await this.fsclient.collection(this.path)
            .doc(entityId)
            .get()
            .then((snapshot: firestore.DocumentData) => snapshot.data());

        if (!entity) {
            return null;
        }

        let entityKtpsData: EntityKTP[] = [];
        let entityKtps = await this.fsclient.collection(this.path)
            .doc(entityId)
            .collection('ktp')
            .get()
            .then((snapshot: firestore.DocumentData) => snapshot);
        await entityKtps.forEach((doc: any) => {
            entityKtpsData.push(EntityKTP.create(doc));
        });

        return new EntityModel(
            entityId,
            entity.email,
            entity.isAgreeDataSharing,
            entity.isRegisteredSeller,
            entity.isWSActive,
            entityKtpsData,
            entity.logo,
            entity.maxDevice,
            entity.phone,
            entity.referredBy,
            entity.registerName,
            entity.ruloUserId,
            entity.statusReason,
            entity.storeCode,
            entity.storeName,
            entity.type,
            entity.createdAt,
            entity.updatedAt
        );
    }
}