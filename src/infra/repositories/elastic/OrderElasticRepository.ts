import { BaseElasticRepository } from "../base/BaseElasticRepository";
import { Order } from '../../../domain/model/OrderModel';

import { Injectable } from '@nestjs/common';


@Injectable()
export class OrderElasticRepository extends BaseElasticRepository implements OrderRepositoryInterface {
    public async getOrderList(page: number = 1, perPage: number = 20, query: object, sort?: object): Promise<object> {
        const searchResult: any = await this.searchDocument(page, perPage, 'order', query, sort);
        const data: any[] = [];
        let total = 0;

        if (searchResult.hits.hits.length > 0) {
            total = searchResult.hits.total;
        }

        searchResult.hits.hits.forEach((element: any) => {
            const resultData = element._source;
            data.push(new Order(
                resultData.order_id,
                resultData.buyer_id,
                resultData.order_number,
                resultData.order_type,
                resultData.status,
                resultData.total,
                resultData.wholesaler_id,
                resultData.wholesaler_name,
                resultData.created_at,
                resultData.updated_at
            ));
        });

        return {
            data,
            meta: {
                page: Number(page),
                per_page: Number(perPage),
                total_data: Number(total),
                total_page: Math.ceil(total / perPage)
            }
        };
    }
}