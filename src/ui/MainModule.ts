import { RetailerUserModule } from './modules/RetailerUserModule';
import { OrderModule } from './modules/OrderModule';
import { AuthModule } from './modules/AuthModule';

import { AuthMiddleware } from './middlewares/AuthMiddlware';

import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthController } from './controllers/AuthController';

@Module({
    imports: [
        RetailerUserModule,
        OrderModule,
        AuthModule
    ],
    controllers: [],
    providers: []
})

export class MainModule {
    
}
