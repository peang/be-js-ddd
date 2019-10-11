import { Module } from '@nestjs/common';
import { OrderController } from './controllers/OrderController';

import { OrderApp } from '../app/app/OrderApp';

import { OrderElasticRepository } from '../infra/repositories/OrderElasticRepository';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [OrderApp, OrderElasticRepository]
})

export class AppModule { }
