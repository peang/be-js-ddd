import { BaseSQLRepository } from '../base/BaseSQLRepository';
import { DBService } from '../../services/DBService';

export default class UserRepository extends BaseSQLRepository {
    public modelName: string = 'user';
}