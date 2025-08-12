// src/serverless.ts
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './app.module';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let appServer: express.Express;
let appInit: Promise<void>;

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    logger: false,
  });
  await app.init();
  appServer = server;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!appServer) {
    if (!appInit) appInit = bootstrap();
    await appInit;
  }
  appServer(req as any, res as any);
}
