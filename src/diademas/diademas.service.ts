import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDiademaDto } from './dto/create-diadema.dto';
import { UpdateDiademaDto } from './dto/update-diadema.dto';
import { DiademaDocument } from './schemas/diademas.schema';

@Injectable()
export class DiademasService {

  constructor(
    @InjectModel('Diadema') private diademaModel: Model<DiademaDocument>,
  ) { }

  async create(createDiademaDto: CreateDiademaDto) {
    const createdDiadema = new this.diademaModel(createDiademaDto);
    const savedDiadema = await createdDiadema.save();
    return savedDiadema;
  }

  findAll() {
    return `This action returns all diademas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diadema`;
  }

  update(id: number, updateDiademaDto: UpdateDiademaDto) {
    return `This action updates a #${id} diadema`;
  }

  remove(id: number) {
    return `This action removes a #${id} diadema`;
  }
}
