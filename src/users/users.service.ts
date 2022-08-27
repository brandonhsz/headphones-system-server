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

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id }).exec();
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { campaign, branch, employeeId, name, status } = updateUserDto
    const { serialNumber, ...headRest } = updateUserDto.headPhone
    const userToUpdate = await this.userModel.findOne({ _id: id }).exec();
    const userUpdated = await this.userModel.updateOne(userToUpdate, {
      name: name.toUpperCase(),
      campaign: campaign.toUpperCase(),
      employeeId: employeeId.toString(),
      status: status,
      branch: branch.toUpperCase(),
      headPhone: {
        serialNumber: serialNumber.toUpperCase(),
        ...headRest
      }
    })
    return {
      message: 'User updated',
      userUpdated
    };
  }

  async remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
