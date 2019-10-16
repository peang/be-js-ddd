import { OrderController } from './controllers/OrderController';

import { ElasticService } from '../infra/services/ElasticService';

import { OrderModule } from './modules/OrderModule';

import { AuthMiddleware } from './middlewares/AuthMiddlware';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

@Module({
    imports: [OrderModule],
    controllers: [OrderController],
    providers: [ElasticService]
})

export class MainModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
    }
}
