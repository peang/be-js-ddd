// UI
import { OrderController } from '../controllers/OrderController';
import { AuthMiddleware } from '../middlewares/AuthMiddlware';

// APP
//

// INFRA
//

// providers
import { OrderProvider } from './providers/OrderProvider';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';



@Module({
    controllers: [OrderController],
    providers: OrderProvider,
    exports: OrderProvider
})
export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
            .forRoutes(OrderController)
    }
}
