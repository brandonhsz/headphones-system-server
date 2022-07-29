import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IHeadPhone } from 'src/interfaces/Headphone.interface'

export type DiademaDocument = IHeadPhone & Document;

// @Schema()
export class Diadema {

  @Prop()
  type: string;

  @Prop()
  description: string;

  @Prop()
  serialNumber: string;

  @Prop()
  active: boolean;

}

export const DiademaSchema = SchemaFactory.createForClass(Diadema);