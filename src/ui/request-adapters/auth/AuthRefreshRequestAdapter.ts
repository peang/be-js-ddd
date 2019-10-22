import { RequestAdapterInterface } from "../RequestAdapterInterface";
import { RequestAdapter } from "../Adapters";
import { RequestInterface } from "../../types/CommonType";
import { IContext } from "../../types/CommonType";
import { AuthRefreshDTO } from "../../../app/dto/auth/AuthRefreshDTO";

import * as Joi from '@hapi/joi';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRefreshRequestAdapter extends RequestAdapter implements RequestAdapterInterface {
    public async getDTO(data: RequestInterface, context: IContext): Promise<AuthRefreshDTO> {
        await this.validate(data, this.getScheme());
        return new AuthRefreshDTO(data.body.refresh_token);
    }

    public getScheme(): Joi.ObjectSchema {
        return Joi.object({
            body: Joi.object({
                refresh_token: Joi.string().required()
            }).required()
        })
    };

}