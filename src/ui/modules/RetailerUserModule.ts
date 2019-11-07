// UI
//

// APP
//

// INFRA
//

import { RetailerUserProvider } from './providers/RetailerUserProvider';

import { Module } from '@nestjs/common';

@Module({
    controllers: [],
    providers: RetailerUserProvider,
    exports: RetailerUserProvider
})
export class RetailerUserModule { }
