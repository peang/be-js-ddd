import { Injectable } from '@nestjs/common';

export class CommonInfraService {
    public static generatePagination(page: number = 1, perPage: number = 10) {
        let from, size = 0;
    
        if (page <= 0) {
            page = 1;
        }
        page = page - 1;
        from = (page * perPage);
        size = perPage;
    
        return { from, size };
    }
}