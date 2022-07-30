import { IHeadPhone } from "./Headphone.interface";
import { Diadema } from '../diademas/schemas/diademas.schema';

export interface IUser {
  name: string;
  employeeId: string;
  campaign: string;
  branch: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  // headPhone: Diadema;
}