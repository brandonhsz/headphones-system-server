import { PartialType } from '@nestjs/mapped-types';
import { CreateDiademaDto } from 'src/diademas/dto/create-diadema.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly campaign: string;
  readonly branch: string;
  readonly status: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
  readonly headPhone: CreateDiademaDto
}


