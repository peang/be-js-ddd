import { NestFactory } from '@nestjs/core';
import { MainModule } from './ui/MainModule';
import * as env from 'dotenv';

import { ElasticService } from './infra/services/ElasticService';
import { DBService } from './infra/services/DBService';
import { FirestoreService } from './infra/services/FirestoreService';
import { AuthMiddleware } from './ui/middlewares/AuthMiddlware';

async function bootstrap() {
    env.config();

    await initDatabases();

    const app = await NestFactory.create(MainModule);
    await app.listen(process.env.APP_PORT);
}

async function initDatabases() {
    if (process.env.FIREBASE_ACCOUNT_URL) {
        FirestoreService.initialize({
            service_account_path: String(process.env.FIREBASE_ACCOUNT_URL),
            db_url: String(process.env.FIREBASE_DB_URL),
            storage_url: String(process.env.FIREBASE_STORAGE_URL)
        });
    }

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