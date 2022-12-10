import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.getOne(id);
  }

  @Post()
  create(@Body() productBody: CreateProductDto) {
    return this.productService.create(productBody);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() productBody: CreateProductDto) {
    return this.productService.update(id, productBody);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
