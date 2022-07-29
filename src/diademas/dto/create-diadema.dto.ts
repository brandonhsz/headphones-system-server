import { IHeadPhone } from "src/interfaces/Headphone.interface";

export class CreateDiademaDto implements IHeadPhone {
  readonly type: string;
  readonly description: string;
  readonly serialNumber: string;
  readonly active: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
}
