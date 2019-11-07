// UI
import { EntityController } from '../controllers/EntityController';

// APP
//

// INFRA
//

// providers
import { EntityRelationProvider } from './providers/EntityRelationProvider';
import { EntityModule } from './EntityModule';

import { AuthMiddleware } from '../middlewares/AuthMiddlware';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';


@Module({
    controllers: [EntityController],
    imports: [EntityModule],
    providers: EntityRelationProvider,
    exports: EntityRelationProvider
})

export class EntityRelationModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
            .forRoutes(EntityController)
    }
}
