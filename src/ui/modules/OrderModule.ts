// UI
import { OrderListRequestAdapter } from './../request-adapters/order/OrderListRequestAdapter';

// APP
import { OrderApp } from '../../app/app/OrderApp';

// INFRA
import { OrderElasticRepository } from '../../infra/repositories/elastic/OrderElasticRepository';
import { OrderInfraHelper } from '../../infra/helpers/OrderInfraService';

import { Module } from '@nestjs/common';

@Module({
    providers: [OrderListRequestAdapter, OrderElasticRepository, OrderInfraHelper, OrderApp],
    exports: [OrderListRequestAdapter, OrderElasticRepository, OrderInfraHelper, OrderApp]
})
export class OrderModule { }
