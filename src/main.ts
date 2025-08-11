import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Parse cookies
  app.use(cookieParser());

  // Optional: Enable CORS with credentials for cookies
  app.enableCors({
    origin: 'http://localhost:3000', // your frontend URL
    credentials: true,
  });

  // Optional: Global prefix
  app.setGlobalPrefix('api');

  await app.listen(3001);
  console.log(`🚀 Server is running on http://localhost:3001/api`);
}
bootstrap();
