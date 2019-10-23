import { BaseSQLRepository } from '../base/BaseSQLRepository';
import { RetailerUserModel } from '../../../domain/models/RetailerUserModel';

export class UserSQLRepository extends BaseSQLRepository implements UserRepositoryInterface {
    public modelName: string = 'retailer_user';

    public async getUserList(page: number, perPage: number, query: object, sort?: object) {
        return {};
    }

    public async getUserDetail(userId: string) {
        const user = await this.findOne({
            id: userId
        });


        return user
    }

    public async getOneBy(condition: object): Promise<RetailerUserModel | null> {
        const userResult = await this.findOne(condition);

        if (userResult) {
            return new RetailerUserModel(
                userResult.id,
                userResult.user_id,
                userResult.entity_id,
                userResult.name,
                userResult.email,
                userResult.phone,
                userResult.password,
                userResult.pin,
                userResult.is_active,
                userResult.is_account_verified,
                userResult.is_profile_completed,
                userResult.img,
                userResult.refresh_token,
                userResult.refresh_expires,
                userResult.created_at,
                userResult.updated_at
            );
        }

        return null;
    }
}