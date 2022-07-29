import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiademasService } from './diademas.service';
import { DiademasController } from './diademas.controller';
import { DiademaSchema } from './schemas/diademas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Diadema', schema: DiademaSchema}]),
  ],
  controllers: [DiademasController],
  providers: [DiademasService]
})
export class DiademasModule {}
