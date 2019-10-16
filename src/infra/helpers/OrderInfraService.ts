import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderInfraHelper {
    public generateOrderFilters(filter: any, buyerId: string) {
        const queryArr = [];
        const filters: any = {
            query: {
                query_string: {
                    query: ''
                }
            },
            sort: {}
        };
        const {
            wholesaler_id,
            order_id,
            order_number,
            status,
            sort
        } = filter;
    
        queryArr.push(`(buyer_id:${buyerId})`);
        if (!wholesaler_id && !order_id && !order_number && !status && !sort) {
            filters.query.query_string.query = queryArr.join(' AND ');
            return filters;
        }
    
        // explicityly define filters
        if (wholesaler_id) {
            queryArr.push(`(wholesaler_id:${wholesaler_id})`); // Exact Query
        }
        if (order_id) {
            queryArr.push(`(order_id:${order_id})`); // Exact Query
        }
        if (order_number) {
            queryArr.push(`(order_number:${order_number})`); // Exact Query
        }
        if (status) {
            queryArr.push(`(status:${status})`); // Exact Query
        }
    
        if (sort) {
            if (sort.charAt(0) == '-') {
                const newSort = sort.substr(1, sort.length - 1);
                filters.sort[newSort] = {
                    order: 'desc'
                };
            } else {
                filters.sort[sort] = {
                    order: 'asc'
                };
            }
        }
    
        filters.query.query_string.query = queryArr.join(' AND ');
    
        return filters;
    }
}