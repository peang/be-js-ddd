import { HttpError, Elastic } from 'larisin-common';
// import { generatePagination } from '../../utils/filter_helpers';

export default class BaseElasticRepository {
    public _elastic: any;
    constructor() {
        this._elastic = Elastic.getInstance();
    }

    public async countIndex(index: string) {
        return await this._elastic.count({
            index,
            type: 'CatalogItem'
        }, (err: any, res: any) => {
            if (err) {
                throw HttpError.InternalServerError('ERROR_COUNTING_INDEX');
            } else {
                return true;
            }
        });
    }

    public async createIndex(index: string) {
        return await this._elastic.indices.create({
            index
        }, (err: any, res: any) => {
            if (err) {
                throw HttpError.InternalServerError('ERROR_CREATING_INDEX');
            } else {
                return true;
            }
        });
    }

    public async deleteIndex(index: string) {
        return await this._elastic.indices.delete({
            index
        }, (err: any, res: any) => {
            if (err) {
                throw HttpError.InternalServerError('ERROR_DELETING_INDEX');
            } else {
                return true;
            }
        });
    }

    public async insertDocument(index: string, type: string, body: object, id?: string) {
        return await this._elastic.index({
            index,
            type,
            body,
            id
        }, (err: any, res: any) => {
            if (err) {
                throw HttpError.InternalServerError('ERROR_ADDING_DATA');
            } else {
                return true;
            }
        });
    }

    public async deleteDocument(index: string, type: string, id: string) {
        return await this._elastic.delete({
            index,
            type,
            id
        }, (err: any, res: any) => {
            if (err) {
                throw HttpError.InternalServerError('ERROR_DELETING_DATA');
            } else {
                return true;
            }
        });
    }

    public async searchDocument(page: number = 0, perPage: number = 20, index: string, query: object, sort?: object) {
        // const { size, from } = generatePagination(page, perPage);
        return await this._elastic.search({
            index,
            body: {
                size: 10,
                from: 0,
                query,
                sort
            }
        }).then((res: any) => res);
    }

    public async findOne(index: string, query: object) {
        return await this._elastic.search({
            index,
            body: {
                size: 1,
                query
            }
        }).then((res: any) => res);
    }

    public async findAll(index: string, query: object) {
        return await this._elastic.search({
            index,
            body: {
                query
            }
        }).then((res: any) => res);
    }
}
