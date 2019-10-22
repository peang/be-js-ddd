import { CommonInfraService } from '../../services/CommonInfraService';
import { ElasticService } from '../../services/ElasticService';

import { InternalServerErrorException, Injectable } from '@nestjs/common';

export class BaseElasticRepository {
    constructor(private readonly esclient) {
        this.esclient = ElasticService.getInstance();
    }

    public async countIndex(index: string) {
        return await this.esclient.count({
            index,
            type: 'CatalogItem'
        }, (err: any, res: any) => {
            if (err) {
                throw new InternalServerErrorException('ERROR_COUNTING_INDEX');
            } else {
                return true;
            }
        });
    }

    public async createIndex(index: string) {
        return await this.esclient.indices.create({
            index
        }, (err: any, res: any) => {
            if (err) {
                throw new InternalServerErrorException('ERROR_CREATING_INDEX');
            } else {
                return true;
            }
        });
    }

    public async deleteIndex(index: string) {
        return await this.esclient.indices.delete({
            index
        }, (err: any, res: any) => {
            if (err) {
                throw new InternalServerErrorException('ERROR_DELETING_INDEX');
            } else {
                return true;
            }
        });
    }

    public async insertDocument(index: string, type: string, body: object, id?: string) {
        return await this.esclient.index({
            index,
            type,
            body,
            id
        }, (err: any, res: any) => {
            if (err) {
                throw new InternalServerErrorException('ERROR_ADDING_DATA');
            } else {
                return true;
            }
        });
    }

    public async deleteDocument(index: string, type: string, id: string) {
        return await this.esclient.delete({
            index,
            type,
            id
        }, (err: any, res: any) => {
            if (err) {
                throw new InternalServerErrorException('ERROR_DELETING_DATA');
            } else {
                return true;
            }
        });
    }

    public async searchDocument(page: number = 0, perPage: number = 20, index: string, query: object, sort?: object) {
        const { size, from } = CommonInfraService.generatePagination(page, perPage);

        return await this.esclient.search({
            index,
            body: {
                size,
                from,
                query,
                sort
            }
        }).then((res: any) => res).catch((err: any) => {
            process.exit(0);
        });
    }

    public async findOne(index: string, query: object) {
        return await this.esclient.search({
            index,
            body: {
                size: 1,
                query
            }
        }).then((res: any) => res);
    }

    public async findAll(index: string, query: object) {
        return await this.esclient.search({
            index,
            body: {
                query
            }
        }).then((res: any) => res);
    }
}
