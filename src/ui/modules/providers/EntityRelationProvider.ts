import { EntityRelationApp } from '../../../app/app/EntityRelationApp';
import { EntityRelationFirestoreRepository } from '../../../infra/repositories/firestore/EntityRelationFirestoreRepository';

export const EntityRelationProvider = [
    {
        provide: 'EntityRelationApp',
        useClass: EntityRelationApp
    },
    {
        provide: 'EntityRelationFirestoreRepository',
        useClass: EntityRelationFirestoreRepository
    }
];