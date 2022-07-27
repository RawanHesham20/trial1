import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './modules/user/user.dto';

@Injectable()
export class AppService {

  async create(createUserDto: CreateUserDto) {
    return 'user added';
  }
}
