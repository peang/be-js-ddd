// UI
//

// APP
//

// INFRA
//

// providers
import { EntityProvider } from './providers/EntityProvider';

import { Module } from '@nestjs/common';



@Module({
    controllers: [],
    providers: EntityProvider,
    exports: EntityProvider
})

export class EntityModule { }
