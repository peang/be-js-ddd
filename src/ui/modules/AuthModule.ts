// UI
import { AuthController } from '../controllers/AuthController';
import { RetailerUserModule } from './RetailerUserModule';
import { AuthMiddleware } from '../middlewares/AuthMiddlware';

// APP
//

// INFRA
//

//providers
import { AuthProvider } from './providers/AuthProvider';

import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

@Module({
    imports: [RetailerUserModule],
    controllers: [AuthController],
    providers: AuthProvider,
    exports: AuthProvider
})

export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
            .exclude(
                { path: '/auth/callback', method: RequestMethod.ALL },
                { path: '/auth/refresh', method: RequestMethod.ALL }
            )
            .forRoutes(AuthController)
    }
}
