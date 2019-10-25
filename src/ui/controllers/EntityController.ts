import { BaseController } from "./BaseController";
import { ResponseInterface } from "../types/CommonType";
import { EntityRelationDetailRequestAdapter } from "../request-adapters/entity/EntityRelationDetailRequestAdapter";
import { EntityRelationModel } from "../../domain/models/EntityRelationModel";
import { EntityRelationApp } from "../../app/app/EntityRelationApp";

import { Get, Controller, Req, Param, Query, HttpStatus } from "@nestjs/common";

@Controller('/entity')
export class EntityController extends BaseController {
    constructor(private readonly entityRelationApp: EntityRelationApp) {
        super();
    }

    @Get('/:storeId/relations')
    async getRelation(@Req() req, @Param() params): Promise<ResponseInterface> {
        const adapter = new EntityRelationDetailRequestAdapter();
        const dto = await adapter.getDTO({
            params
        }, req.context);
        const relation: EntityRelationModel = await this.entityRelationApp.entityRelationDetail(dto);

        console.log(relation);
        process.exit(0);
        return {
            message: 'ENTITY_RELATION_DETAIL',
            status: HttpStatus.OK,
            content: relation
        };
    }
}