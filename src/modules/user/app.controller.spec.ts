import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/app.controller';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import {ValidationPipe} from '@nestjs/common';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UsersService],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined',()=>{
    expect(userController).toBeDefined();});

    it('given user register validation, when name is empty, then return error 400',()=>{
      const validationpipe=new ValidationPipe({transform:true});
    });

});
