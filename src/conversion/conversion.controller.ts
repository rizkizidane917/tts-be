import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ConversionService } from './conversion.service';
import { ConversionDto } from './dto/ConversionDto';

@Controller('conversion')
@UseGuards(JwtAuthGuard)
export class ConversionController {
  constructor(private readonly conversionService: ConversionService) {}

  @Post()
  create(@Req() req, @Body() dto: ConversionDto) {
    return this.conversionService.create(req.user.sub, dto);
  }

  @Get()
  findAllByUser(@Req() req) {
    return this.conversionService.findAllByUser(req.user.sub);
  }

  @Delete(':id')
  delete(@Req() req, @Param('id') id: string) {
    return this.conversionService.deleteById(req.user.sub, id);
  }
}
