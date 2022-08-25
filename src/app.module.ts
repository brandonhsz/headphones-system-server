import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DiademasModule } from './diademas/diademas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_SERVER),
    DiademasModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
