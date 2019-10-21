// UI
import { OrderController } from '../controllers/OrderController';
import { OrderListRequestAdapter } from './../request-adapters/order/OrderListRequestAdapter';
import { AuthMiddleware } from '../middlewares/AuthMiddlware';

// APP
import { OrderApp } from '../../app/app/OrderApp';

// INFRA
import { OrderElasticRepository } from '../../infra/repositories/elastic/OrderElasticRepository';
import { OrderInfraHelper } from '../../infra/helpers/OrderInfraService';

import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';


@Module({
    controllers: [OrderController],
    providers: [OrderListRequestAdapter, OrderElasticRepository, OrderInfraHelper, OrderApp],
    exports: [OrderListRequestAdapter, OrderElasticRepository, OrderInfraHelper, OrderApp]
})
export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
            .forRoutes(OrderController)
    }
}
