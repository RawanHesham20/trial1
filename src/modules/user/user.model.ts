import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class  User extends mongoose.Model{
  @Prop()
  id:number;

  @Prop()
  @ApiProperty({})
  name: string;

  @Prop()
  @ApiProperty({})
  age: number;

  @Prop()
  @ApiProperty({})
  phonenumber: number;

  @Prop()
  @ApiProperty({})
  email: string;

  @Prop()
  @ApiProperty({type:String})
  password: string;
}

export const userSchema = SchemaFactory.createForClass(User);

