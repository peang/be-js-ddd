import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { OrderListDTO } from "../../../app/dto/order/OrderListDTO";
import { Injectable } from "@nestjs/common";
import { RequestAdapter } from "../Adapters";
import * as Joi from '@hapi/joi';
import { RequestInterface } from "../../../ui/types/CommonType";

@Injectable()
export class OrderListRequestAdapter extends RequestAdapter implements RequestAdapterInterface {
    public async getDTO(data: RequestInterface, context: object): Promise<OrderListDTO> {
        await this.validate(data, this.getScheme());
        
        // sample payload
        return new OrderListDTO('E33DLDW86', data.query.page, data.query.per_page, '', '', '', '');
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