import { IsString, IsNumber } from 'class-validator';

export class ConversionDto {
  @IsString()
  text: string;

  @IsString()
  voice: string;

  @IsString()
  language: string;

  @IsNumber()
  rate: number;

  @IsNumber()
  pitch: number;

  @IsNumber()
  volume: number;
}
