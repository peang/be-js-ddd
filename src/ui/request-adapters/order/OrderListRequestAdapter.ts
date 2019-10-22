import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { OrderListDTO } from "../../../app/dto/order/OrderListDTO";
import { Injectable } from "@nestjs/common";
import { RequestAdapter } from "../Adapters";
import { RequestInterface } from "../../../ui/types/CommonType";
import { IContext } from "../../types/CommonType";

import * as Joi from '@hapi/joi';

@Injectable()
export class OrderListRequestAdapter extends RequestAdapter implements RequestAdapterInterface {
    public async getDTO(data: RequestInterface, context: IContext): Promise<OrderListDTO> {
        await this.validate(data, this.getScheme());

        return new OrderListDTO(
            context.entity_id,
            data.query.page,
            data.query.per_page,
            data.query.order_id,
            data.query.order_number,
            data.query.status,
            data.query.sort
        );
    }

    public getScheme(): Joi.ObjectSchema {
        return Joi.object({
            query: Joi.object({
                page: Joi.number(),
                per_page: Joi.number(),
                order_id: Joi.string(),
                order_number: Joi.string(),
                status: Joi.string(),
                sort: Joi.string()
            }).required()
        })
    };

}