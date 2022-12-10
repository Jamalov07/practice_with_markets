import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMarketDto } from './dto/create-markets.dto';
import { MarketsService } from './markets.service';

@Controller('markets')
export class MarketsController {
  constructor(private readonly marketService: MarketsService) {}

  @Get()
  getAll() {
    return this.marketService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.marketService.getOne(id);
  }

  @Post()
  create(@Body() marketBody: CreateMarketDto) {
    return this.marketService.create(marketBody);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() marketBody: CreateMarketDto) {
    return this.marketService.update(id, marketBody);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.marketService.delete(id);
  }
}
