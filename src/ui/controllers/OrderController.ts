import { Controller, Get, Param, Query, Req, HttpCode } from '@nestjs/common';
import { OrderApp } from '../../app/app/OrderApp';
import { OrderListRequestAdapter } from '../request-adapters/order/OrderListRequestAdapter';
import { OrderDetailRequestAdapter } from '../request-adapters/order/OrderDetailRequestAdapter';
import { Order } from '../../domain/model/OrderModel';
import { ResponseInterface } from '../types/CommonType';
import OrderTransformer from '../transformers/OrderTransformer';

@Controller('/order')
export class OrderController {
    constructor(private readonly orderApp: OrderApp) { }

    @Get()
    async list(@Req() req, @Param() params, @Query() query): Promise<ResponseInterface> {
        const adapter = new OrderListRequestAdapter();
        const dto = await adapter.getDTO({
            query
        }, {});
        const orders: {data: [Order]} = await this.orderApp.orderList(dto);
        return {
            message: 'ORDER_LIST',
            data: await OrderTransformer.transformList(orders.data)
        };
    }

    @Get('/:order_id')
    async detail(@Req() req, @Param() params, @Query() query): Promise<ResponseInterface> {
        const adapter = new OrderDetailRequestAdapter();
        const dto = await adapter.getDTO({
            params
        }, {});
        const order: Order = await this.orderApp.orderDetail(dto);
        return {
            message: 'ORDER_DETAIL',
            data: OrderTransformer.transformDetail(order)
        };
    }
}
