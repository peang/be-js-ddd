// UI
//

// APP
//

// INFRA
import { RetailerUserSQLRepository } from '../../infra/repositories/sql/RetailerUserSQLRepository';

import { Module } from '@nestjs/common';

@Module({
    controllers: [],
    providers: [RetailerUserSQLRepository],
    exports: [RetailerUserSQLRepository]
})
export class RetailerUserModule { }
