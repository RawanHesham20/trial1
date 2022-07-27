import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';




const projectModules = [UserModule];



@Module({
  imports: [ConfigModule.forRoot()
    , MongooseModule.forRoot('mongodb+srv://rawansweilem:RAWAN_1512@cluster0.nmlbxex.mongodb.net/?retryWrites=true&w=majority',

      {
        connectionFactory: (connection) => {
          connection.on('connected', () => {
            console.log('db connected');
          });

          connection.on('disconnected', () => {
            console.log('db not connected');
          });

          connection.on('error', (error) => {
            console.log('db connection failed for error: ', error);
          });
          return connection;
        },
      },
    ),
    ...projectModules
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {

}