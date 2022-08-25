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

    const { name, campaign, branch, headPhone, employeeId, ...userRest } = createUserDto
    const { serialNumber, ...headRest } = headPhone
    const dataToCreate = {
      name: name.toUpperCase(),
      campaign: campaign.toUpperCase(),
      employeeId: employeeId.toString(),
      status: true,
      branch: branch.toUpperCase(),
      headPhone: {
        serialNumber: serialNumber.toUpperCase(),
        ...headRest
      }
    }

    const userCreated = new this.userModel(dataToCreate);
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
