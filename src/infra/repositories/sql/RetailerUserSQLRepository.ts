import { BaseSQLRepository } from '../base/BaseSQLRepository';
import { RetailerUserModel } from '../../../domain/models/RetailerUserModel';
import { RetailerUserRepositoryInterface } from '../../../domain/repositories/RetailerUserRepositoryInterface';

export class RetailerUserSQLRepository extends BaseSQLRepository implements RetailerUserRepositoryInterface {
    constructor() {
        super('retailer_user')
    }
    
    public async getRetailerUserList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: RetailerUserModel[], total: number }> {
        throw new Error("Method not implemented.");
    }

    public async getRetailerUserDetail(condition: object):Promise<RetailerUserModel> {
        const user = await this.findOne(condition);

        if (user) {
            return new RetailerUserModel(
                user.id,
                user.user_id,
                user.entity_id,
                user.name,
                user.email,
                user.phone,
                user.password,
                user.pin,
                user.is_active,
                user.is_account_verified,
                user.is_profile_completed,
                user.img,
                user.refresh_token,
                user.refresh_expires,
                user.created_at,
                user.updated_at
            );
        }

        return user
    }
}