import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true //habilitar cors
  });

  app.use(json({limit: '60mb'})); //establecer limite de las peticiones

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentacion API Nestjs Curso')
    .setDescription('documentacion de la API cursos')
    .addTag('courses')
    .addTag('videos')
    .addTag('awards')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  console.log('___ENV___', process.env.PORT)
  app.useGlobalPipes( new ValidationPipe() )
  await app.listen(3000);
}
bootstrap();
