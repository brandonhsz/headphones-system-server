import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { UsersCreateMiddleware } from 'src/middlewares/usersPost.middleware';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersCreateMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.POST })
    // .apply(UsersCreateMiddleware)
    // .forRoutes({ path: 'users/:id', method: RequestMethod.PATCH })
  }
}
