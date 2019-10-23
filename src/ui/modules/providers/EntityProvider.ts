import { EntityFirestoreRepository } from '../../../infra/repositories/firestore/EntityFirestoreRepository';

export const EntityProvider = [
    {
        provide: 'EntityFirestoreRepository',
        useClass: EntityFirestoreRepository
    }
];