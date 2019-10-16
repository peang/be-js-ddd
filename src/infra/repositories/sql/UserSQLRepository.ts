import { BaseSQLRepository } from '../base/BaseSQLRepository';

export default class UserRepository extends BaseSQLRepository {
    public constructor() {
        this.setModel('retailer_user');
    }
}