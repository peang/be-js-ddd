import { BaseController } from './BaseController';
import { AuthApp } from '../../app/app/AuthApp';
import { ResponseInterface } from '../types/CommonType';
import { AuthCallbackRequestAdapter } from '../request-adapters/auth/AuthCallbackRequestAdapter';
import { AuthRefreshRequestAdapter } from '../request-adapters/auth/AuthRefreshRequestAdapter';

import { Controller, Req, Post, Body, HttpStatus, InternalServerErrorException } from '@nestjs/common';

@Controller('/auth')
export class AuthController extends BaseController {
    constructor(private readonly authApp: AuthApp) {
        super();
    }

    @Post('/callback')
    async calback(@Req() req, @Body() body): Promise<ResponseInterface> {
        try {
            const adapter = new AuthCallbackRequestAdapter();
            const dto = await adapter.getDTO({
                body
            }, req.context);
            const authData = await this.authApp.callback(dto);

            return {
                message: 'AUTH_CALLBACK',
                status: HttpStatus.OK,
                content: authData
            };
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }
    }

    @Post('/refresh')
    async refresh(@Req() req, @Body() body): Promise<ResponseInterface> {
        try {
            const adapter = new AuthRefreshRequestAdapter();
            const dto = await adapter.getDTO({
                body
            }, req.context);
            const refreshData = await this.authApp.refresh(dto);

            return {
                message: 'AUTH_REFRESH',
                status: HttpStatus.OK,
                content: refreshData
            };
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }
    }
}
