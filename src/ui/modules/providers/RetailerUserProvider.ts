import { RetailerUserSQLRepository } from '../../../infra/repositories/sql/RetailerUserSQLRepository';

export const RetailerUserProvider = [
    {
        provide: 'RetailerUserSQLRepository',
        useClass: RetailerUserSQLRepository
    }
];