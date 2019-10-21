import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { RequestAdapter } from "../Adapters";
import { RequestInterface } from "../../types/CommonType";
import { IContext } from "../../types/CommonType";
import { AuthCallbackDTO } from "../../../app/dto/auth/UserDetailDTO copy";

import * as Joi from '@hapi/joi';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthCallbackRequestAdapter extends RequestAdapter implements RequestAdapterInterface {
    public async getDTO(data: RequestInterface, context: IContext): Promise<AuthCallbackDTO> {
        await this.validate(data, this.getScheme());
        return new AuthCallbackDTO(data.body.id_token);
    }

    public getScheme(): Joi.ObjectSchema {
        return Joi.object({
            body: Joi.object({
                id_token: Joi.string().required()
            }).required()
        })
    };

}