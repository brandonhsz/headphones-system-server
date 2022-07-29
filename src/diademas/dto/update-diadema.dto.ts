import { PartialType } from '@nestjs/mapped-types';
import { CreateDiademaDto } from './create-diadema.dto';

export class UpdateDiademaDto extends PartialType(CreateDiademaDto) {}
