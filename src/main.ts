import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('v1');
  app.enableCors();
  // app.use(morgan('dev'));
  // app.useGlobalPipes(new ValidationPipe({transform:true}));

  console.log('hello');

  const config = new DocumentBuilder()
    .setTitle('trial')
    .setDescription('The trial API description')
    .setVersion('1.0')
    // .addTag('trial1')
    .build();

  const document = SwaggerModule.createDocument(app, config,{
    operationIdFactory:(
      controllerKey:string,
      methodKey:string
      ) =>methodKey
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000, ()=>{
    console.log('user started at ',process.env.PORT || 3000);
  });

  // await app.listen(3000);
  
}


bootstrap();
