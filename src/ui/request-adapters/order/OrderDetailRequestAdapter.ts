import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { OrderDetailDTO } from "../../../app/dto/order/OrderDetailDTO";
import { Injectable } from "@nestjs/common";
import { RequestAdapter } from "../Adapters";
import * as Joi from '@hapi/joi';
import { RequestInterface } from "../../types/CommonType";

@Injectable()
export class OrderDetailRequestAdapter extends RequestAdapter implements RequestAdapterInterface {
    public async getDTO(data: RequestInterface, context: object): Promise<OrderDetailDTO> {
        await this.validate(data, this.getScheme());
        
        return new OrderDetailDTO(data.params.order_id);
    }

    public getScheme(): Joi.ObjectSchema {
        return Joi.object({
            params: Joi.object({
                order_id: Joi.string().required()
            }).required()
        })
    };

}