import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('User') private userModel,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const userCreated = new this.userModel(createUserDto);
    console.log(createUserDto);
    return await userCreated.save();
  }

  async findAll() {
    const allUsers = await this.userModel.find().exec();
    return allUsers;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
