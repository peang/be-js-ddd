import { Controller, Get, Param, Query } from '@nestjs/common';
import { OrderApp } from '../../app/app/OrderApp';

@Controller('/order')
export class OrderController {
    constructor(private readonly orderApp: OrderApp) { }

    @Get()
    getHello(@Param() params, @Query() queries): object {
        return this.orderApp.orderList();
    }
}
