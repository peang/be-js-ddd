import { OrderApp } from '../../../app/app/OrderApp';
import { OrderElasticRepository } from '../../../infra/repositories/elastic/OrderElasticRepository';
import { OrderListRequestAdapter } from '../../../ui/request-adapters/order/OrderListRequestAdapter';

export const OrderProvider = [
    {
        provide: 'OrderApp',
        useClass: OrderApp
    },
    {
        provide: 'OrderListRequestAdapter',
        useClass: OrderListRequestAdapter
    },
    {
        provide: 'OrderElasticRepository',
        useClass: OrderElasticRepository
    }
];