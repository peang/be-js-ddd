import { NestFactory } from '@nestjs/core';
import { AppModule } from './ui/AppModule';
import { Elastic, HttpError } from 'larisin-common';
import * as env from 'dotenv';

async function bootstrap() {
    env.config();
    HttpError.initialize();

    await initDatabases();

    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

async function initDatabases() {
    if (process.env.ELASTIC_DB_HOST && process.env.ELASTIC_DB_USERNAME && process.env.ELASTIC_DB_PASSWORD) {
        console.log('Init Elastic');
        Elastic.initialize({
            protocol: String('https'),
            host: String(process.env.ELASTIC_DB_HOST),
            username: String(process.env.ELASTIC_DB_USERNAME),
            password: String(process.env.ELASTIC_DB_PASSWORD)
        });
    }
}
bootstrap();