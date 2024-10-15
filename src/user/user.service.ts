import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.interfce';
import {Model} from 'mongoose'
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>){}

  async create(createUserDto: CreateUserDto) {
    try {
      const hashPassword = await bcrypt.hash(createUserDto.password, 10)
      const newUser = new this.userModel({...createUserDto, password: hashPassword})
      return newUser.save()
    } catch (err) {
      throw new BadRequestException()
    }
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
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
