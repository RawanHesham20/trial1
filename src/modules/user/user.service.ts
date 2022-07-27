import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User ,UserDocument} from './user.model';
import { CreateUserDto } from './user.dto';
import * as mongoose from 'mongoose';

@Injectable()

export class UsersService {
    private users: User[]=[];
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){

    }
    async insertUsers(req:User){
        
        return await this.userModel.create(req);
    }

    async getUsers():Promise<User[]>{
       return this.userModel.find();
        
    }

    async getSingleUser(userID:string):Promise<User>{
        const user=await this.userModel.findById(userID);
        return user;
    }

    async updateUser(userId:string, req:User):Promise<User>{
        return await this.userModel.findByIdAndUpdate(userId,req,{new:true});
    }

    async deleteUser(userId:string){
        await this.userModel.findByIdAndDelete({id:userId});
    }



    async create(createUserDto: CreateUserDto) {
        return 'user added';
      }
}