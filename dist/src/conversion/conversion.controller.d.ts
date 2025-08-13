import { ConversionService } from './conversion.service';
import { ConversionDto } from './dto/ConversionDto';
export declare class ConversionController {
    private readonly conversionService;
    constructor(conversionService: ConversionService);
    create(req: any, dto: ConversionDto): Promise<{
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
    findAllByUser(req: any): Promise<{
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
    delete(req: any, id: string): Promise<{
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
