import { Body, Controller, Get, Param, Post,Put, Delete } from '@nestjs/common';
import { UsersService } from './user.service';
import { User} from './user.model';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private service: UsersService) {}
@Post()
    async addUser(@Body() req:User):Promise<User>{
        console.log('hello')
        return this.service.insertUsers(req);
    }
/*
@Post()
async register(@Body()userRegister: User){



}*/
@Get()
async getAllUsers():Promise<User[]>{
    return this.service.getUsers();

}
@Get(':id')
async getUser(@Param('id') userID:string):Promise<User>{
    return this.service.getSingleUser(userID);

}

@Put(':id')
async updateUser(@Param('id') userId:string, @Body()req:User):Promise<any>{
   return this.service.updateUser(userId,req);
}

@Delete(':id')
async removeUser(@Param('id')userId:string):Promise<any>{
    return this.service.deleteUser(userId);
}



}
