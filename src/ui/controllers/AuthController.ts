import { BaseController } from './BaseController';
import { AuthApp } from '../../app/app/AuthApp';
import { ResponseInterface } from '../types/CommonType';
import { AuthCallbackRequestAdapter } from '../request-adapters/auth/AuthCallbackRequestAdapter';

import { Controller, Req, Post, Body } from '@nestjs/common';

@Controller('/auth')
export class AuthController extends BaseController {
    constructor(private readonly authApp: AuthApp) {
        super();
    }

    @Post('/callback')
    async calback(@Req() req, @Body() body): Promise<ResponseInterface> {
        const adapter = new AuthCallbackRequestAdapter();
        const dto = await adapter.getDTO({
            body
        }, req.context);
        
        return {
            message: 'AUTH_CALLBACK',
            data: await this.authApp.callback(dto)
        };
    }
}
