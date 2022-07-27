import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.model';
import { User, UserDocument } from './user.model';

@Module({
    imports: [MongooseModule.forFeatureAsync([
        {
            name: User.name,
            useFactory: async () => {
                const schema = userSchema;
                return schema;
            },
        },
    ])],
    controllers: [UserController],
    providers: [UsersService],
})


export class UserModule { }