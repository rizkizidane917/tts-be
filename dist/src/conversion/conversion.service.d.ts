import { PrismaService } from '../prisma/prisma.service';
import { ConversionDto } from './dto/ConversionDto';
export declare class ConversionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: ConversionDto): Promise<{
        id: string;
        createdAt: Date;
        text: string;
        voice: string;
        language: string;
        rate: number;
        pitch: number;
        volume: number;
        userId: string;
    }>;
    findAllByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        text: string;
        voice: string;
        language: string;
        rate: number;
        pitch: number;
        volume: number;
        userId: string;
    }[]>;
    deleteById(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        text: string;
        voice: string;
        language: string;
        rate: number;
        pitch: number;
        volume: number;
        userId: string;
    }>;
}
