import * as elasticsearch from 'elasticsearch';

import { Injectable } from '@nestjs/common';

interface IElasticInput {
    protocol: string;
    username: string;
    password?: string;
    host: string;
    port?: number;
    cacert?: any;
}

let instance: any;

@Injectable()
export class ElasticService {
    public static initialize(input: IElasticInput): void {
        if (!instance) {
            if (input.cacert) {
                instance = new elasticsearch.Client({
                    hosts: [
                        `${input.protocol}://${input.username}${input.password ? ':' + input.password : ''}@${input.host}${input.port ? ':' + input.port : ''}/`
                    ],
                    ssl: {
                        ca: [input.cacert]
                    }
                });
            } else {
                instance = new elasticsearch.Client({
                    hosts: [
                        `${input.protocol}://${input.username}${input.password ? ':' + input.password : ''}@${input.host}${input.port ? ':' + input.port : ''}/`
                    ]
                });
            }
        }
    }

    public static getInstance() {
        if (!instance) {
            throw new Error('Elastic Not initialize');
        }
        return instance;
    }
}
