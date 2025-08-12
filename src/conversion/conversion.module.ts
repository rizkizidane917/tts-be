import { Module } from '@nestjs/common';
import { ConversionController } from './conversion.controller';
import { ConversionService } from './conversion.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ConversionController],
  providers: [ConversionService, PrismaService],
})
export class ConversionModule {}
