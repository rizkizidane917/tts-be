import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const API_PORT = process.env.PORT || 4001;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const cookieParserFn = (cookieParser as any).default || (cookieParser as any);
  app.use(cookieParserFn());

  app.enableCors({
    origin: ['https://tts-fe-one.vercel.app', 'http://localhost:3000'],
    methods: 'GET,POST,DELETE',
    credentials: true,
  });

  app.setGlobalPrefix('api');

  await app.listen(API_PORT);
  console.log(`🚀 Server running at http://localhost:${API_PORT}/api`);
}

bootstrap();
