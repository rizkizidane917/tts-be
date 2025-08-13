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

  const allowedOrigins = process.env.HOST_WEB
    ? process.env.HOST_WEB.split(',').map((o) => o.trim())
    : ['http://localhost:3000'];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, origin);
      }
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },

    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  app.setGlobalPrefix('api');

  await app.listen(API_PORT);
  console.log(`🚀 Server running at http://localhost:${API_PORT}/api`);
  console.log(`✅ Allowed Origins: ${allowedOrigins.join(', ')}`);
  console.log(`${process.env.HOST_WEB}`);
}

bootstrap();
