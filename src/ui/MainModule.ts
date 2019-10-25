import { RetailerUserModule } from './modules/RetailerUserModule';
import { OrderModule } from './modules/OrderModule';
import { AuthModule } from './modules/AuthModule';
import { EntityRelationModule } from './modules/EntityRelationModule';
import { EntityModule } from './modules/EntityModule';

import { Module } from '@nestjs/common';

@Module({
    imports: [
        RetailerUserModule,
        OrderModule,
        AuthModule,
        EntityModule,
        EntityRelationModule
    ],
    controllers: [],
    providers: []
})

export class MainModule {

}
