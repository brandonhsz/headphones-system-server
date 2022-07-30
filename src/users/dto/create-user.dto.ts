import { IUser } from 'src/interfaces/User.interface';
import { IHeadPhone } from 'src/interfaces/Headphone.interface';
import { CreateDiademaDto } from 'src/diademas/dto/create-diadema.dto';
export class CreateUserDto implements IUser {
  readonly name: string;
  readonly employeeId: string;
  readonly campaign: string;
  readonly branch: string;
  readonly status: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
  readonly headPhone: CreateDiademaDto
}
