import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDTO } from './dto/loginDTO';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.interfce';
import {Model} from 'mongoose'

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>){}

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async validatUser(loginDTO: LoginDTO){
    //find user
    const result = await this.userModel.findOne({username: loginDTO.username})
    if(!result) throw new NotFoundException("User not fund");
    
    // comper password

    //token or error
  }
}
