import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConversionDto } from './dto/ConversionDto';

@Injectable()
export class ConversionService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: ConversionDto) {
    return this.prisma.conversion.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  async findAllByUser(userId: string) {
    return this.prisma.conversion.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async deleteById(userId: string, id: string) {
    const conversion = await this.prisma.conversion.findUnique({
      where: { id },
    });

    if (!conversion) throw new NotFoundException('Conversion not found');
    if (conversion.userId !== userId)
      throw new ForbiddenException('Not allowed');

    return this.prisma.conversion.delete({ where: { id } });
  }
}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateConversionDto } from './dto/CreateConversionDto.dto';

// @Injectable()
// export class ConversionsService {
//   constructor(private prisma: PrismaService) {}

//   async create(userId: string, dto: CreateConversionDto) {
//     const conv = await this.prisma.conversion.create({
//       data: {
//         text: dto.text,
//         voice: dto.voice,
//         rate: dto.rate,
//         pitch: dto.pitch,
//         volume: dto.volume,
//         user: { connect: { id: userId } },
//       },
//     });
//     return conv;
//   }

//   async findAllForUser(userId: string) {
//     return this.prisma.conversion.findMany({
//       where: { userId },
//       orderBy: { createdAt: 'desc' },
//     });
//   }

//   async findOne(userId: string, id: string) {
//     const conv = await this.prisma.conversion.findUnique({ where: { id } });
//     if (!conv || conv.userId !== userId)
//       throw new NotFoundException('Conversion not found');
//     return conv;
//   }

//   async remove(userId: string, id: string) {
//     const conv = await this.prisma.conversion.findUnique({ where: { id } });
//     if (!conv || conv.userId !== userId)
//       throw new NotFoundException('Conversion not found');
//     await this.prisma.conversion.delete({ where: { id } });
//     return { id };
//   }
// }
