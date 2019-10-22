// UI
import { OrderController } from '../controllers/OrderController';
import { OrderListRequestAdapter } from './../request-adapters/order/OrderListRequestAdapter';
import { AuthMiddleware } from '../middlewares/AuthMiddlware';

// APP
import { OrderApp } from '../../app/app/OrderApp';

// INFRA
import { OrderInfraHelper } from '../../infra/helpers/OrderInfraService';
import { OrderElasticRepository } from '../../infra/repositories/elastic/OrderElasticRepository';

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
