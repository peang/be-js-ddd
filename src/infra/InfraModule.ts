import { Module } from '@nestjs/common';
import { OrderElasticRepository } from './repositories/OrderElasticRepository';

@Module({
    imports: [],
    controllers: [],
    providers: [OrderElasticRepository]
})

export class InfraModule { }
