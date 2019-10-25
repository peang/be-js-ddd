import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { OrderDetailDTO } from "../../../app/dto/order/OrderDetailDTO";
import { Injectable } from "@nestjs/common";
import { RequestAdapter } from "../Adapters";
import { RequestInterface } from "../../types/CommonType";
import { IContext } from "../../types/CommonType";
import { EntityRelationDetailDTO } from "../../../app/dto/entity-relation/EntityRelationDetailDTO";

import * as Joi from '@hapi/joi';

@Injectable()
export class EntityRelationDetailRequestAdapter extends RequestAdapter implements RequestAdapterInterface {
    public async getDTO(data: RequestInterface, context: IContext): Promise<EntityRelationDetailDTO> {
        await this.validate(data, this.getScheme());
        return new EntityRelationDetailDTO(context.entity_id, data.params.storeId);
    }

    public getScheme(): Joi.ObjectSchema {
        return Joi.object({
            params: Joi.object({
                storeId: Joi.string().required()
            }).required()
        })
    };

}