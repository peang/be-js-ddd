import { Module } from '@nestjs/common';
import { OrderController } from './controllers/OrderController';

import { OrderApp } from '../app/app/OrderApp';

import { OrderElasticRepository } from '../infra/repositories/OrderElasticRepository';
import { OrderListRequestAdapter } from './request-adapters/order/OrderListRequestAdapter';
import { OrderInfraService } from '../infra/services/OrderInfraService';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [OrderApp, OrderElasticRepository, OrderListRequestAdapter, OrderInfraService]
})

export class AppModule { }
