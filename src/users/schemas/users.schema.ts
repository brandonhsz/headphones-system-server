import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Diadema } from "src/diademas/schemas/diademas.schema";
import { IUser } from "src/interfaces/User.interface";

export type UserDocument = IUser & Document;

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  }
})
export class User {

  @Prop()
  name: string;

  @Prop()
  employeeId: string;

  @Prop()
  campaign: string;

  @Prop()
  branch: string;

  @Prop()
  status: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

  @Prop({ type: Diadema })
  headPhone: Diadema;
}

export const UserSchema = SchemaFactory.createForClass(User);