// UI
//

// APP
//

// INFRA
import { UserSQLRepository } from '../../infra/repositories/sql/UserSQLRepository';

import { Module } from '@nestjs/common';

@Module({
    controllers: [],
    providers: [UserSQLRepository],
    exports: [UserSQLRepository]
})
export class RetailerUserModule { }
