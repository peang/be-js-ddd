import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { OrderDetailDTO } from "../../../app/dto/order/OrderDetailDTO";
import { Injectable } from "@nestjs/common";
import { RequestAdapter } from "../Adapters";
import { RequestInterface } from "../../types/CommonType";
import { IContext } from "../../types/CommonType";

import * as Joi from '@hapi/joi';

@Injectable()
export class OrderDetailRequestAdapter extends RequestAdapter implements RequestAdapterInterface {
    public async getDTO(data: RequestInterface, context: IContext): Promise<OrderDetailDTO> {
        await this.validate(data, this.getScheme());
        return new OrderDetailDTO(context.entity_id, data.body.order_no);
    }

    public getScheme(): Joi.ObjectSchema {
        return Joi.object({
            body: Joi.object({
                order_no: Joi.string().required()
            }).required()
        })
    };

}