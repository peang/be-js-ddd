// UI
import { AuthController } from '../controllers/AuthController';
import { AuthCallbackRequestAdapter } from '../request-adapters/auth/AuthCallbackRequestAdapter';
import { RetailerUserModule } from './RetailerUserModule';
import { AuthMiddleware } from '../middlewares/AuthMiddlware';

// APP
import { AuthApp } from '../../app/app/AuthApp';

// INFRA
import { FirebaseService } from '../../infra/services/FirebaseService';

import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

@Module({
    imports: [RetailerUserModule],
    controllers: [AuthController],
    providers: [FirebaseService, AuthCallbackRequestAdapter, AuthApp],
    exports: [AuthCallbackRequestAdapter, AuthApp]
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
            .exclude(
                { path: '/auth/callback', method: RequestMethod.ALL }
            )
            .forRoutes(AuthController)
    }
}
