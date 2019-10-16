import { NestFactory } from '@nestjs/core';
import { MainModule } from './ui/MainModule';
import * as env from 'dotenv';

import { ElasticService } from './infra/services/ElasticService';
import { DBService } from './infra/services/DBService';

async function bootstrap() {
    env.config();

    await initDatabases();

    const app = await NestFactory.create(MainModule);
    await app.listen(3000);
}

async function initDatabases() {
    if (process.env.ELASTIC_DB_HOST && process.env.ELASTIC_DB_USERNAME && process.env.ELASTIC_DB_PASSWORD) {
        ElasticService.initialize({
            protocol: String('https'),
            host: String(process.env.ELASTIC_DB_HOST),
            username: String(process.env.ELASTIC_DB_USERNAME),
            password: String(process.env.ELASTIC_DB_PASSWORD)
        });
    }

    if (process.env.POSTGRES_DB_CONNECTION_STRING
        && process.env.POSTGRES_DB_MODELS_PATH
    ) {
        DBService.initialize({
            connection_string: process.env.POSTGRES_DB_CONNECTION_STRING,
            models_path: process.env.POSTGRES_DB_MODELS_PATH
        });
    }
}
bootstrap();