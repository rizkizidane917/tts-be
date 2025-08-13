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
    origin: function (origin, callback) {
      const allowedOrigins = [
        'https://tts-fe-one.vercel.app',
        'http://localhost:3000',
        'https://localhost:3000',
      ];

      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Allow-Credentials',
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Methods',
      'Access-Control-Allow-Origin',
      'User-Agent',
      'Referer',
      'Accept-Encoding',
      'Accept-Language',
      'Access-Control-Request-Headers',
      'Cache-Control',
      'Pragma',
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.setGlobalPrefix('api');

  await app.listen(API_PORT);
  console.log(`🚀 Server running at http://localhost:${API_PORT}/api`);
}

bootstrap();
