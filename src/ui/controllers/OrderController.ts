import { BaseController } from './BaseController';
import { OrderApp } from '../../app/app/OrderApp';
import { OrderListRequestAdapter } from '../request-adapters/order/OrderListRequestAdapter';
import { OrderDetailRequestAdapter } from '../request-adapters/order/OrderDetailRequestAdapter';
import { Order } from '../../domain/models/OrderModel';
import { ResponseInterface } from '../types/CommonType';
import { OrderTransformer } from '../transformers/OrderTransformer';

import { Controller, Get, Req, Param, Query, HttpStatus } from '@nestjs/common';

@Controller('/order')
export class OrderController extends BaseController {
    constructor(private readonly orderApp: OrderApp) {
        super();
    }

    @Get()
    async list(@Req() req, @Param() params, @Query() query): Promise<ResponseInterface> {
        const adapter = new OrderListRequestAdapter();
        const dto = await adapter.getDTO({
            query
        }, req.context);
        const orders: { data: [Order] } = await this.orderApp.orderList(dto);
        return {
            message: 'ORDER_LIST',
            status: HttpStatus.OK,
            content: await OrderTransformer.transformList(orders.data)
        };
    }

    @Get('/:order_no')
    async detail(@Req() req, @Param() params, @Query() query): Promise<ResponseInterface> {
        const adapter = new OrderDetailRequestAdapter();
        const dto = await adapter.getDTO({
            params
        }, req.context);
        const order: Order = await this.orderApp.orderDetail(dto);
        return {
            message: 'ORDER_DETAIL',
            status: HttpStatus.OK,
            content: await OrderTransformer.transformDetail(order)
        };
    }
}
