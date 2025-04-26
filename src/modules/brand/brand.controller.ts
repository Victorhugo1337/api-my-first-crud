import { Controller, Get, Param } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
  constructor(private service: BrandService) {}

  @Get(':id')
  async brand(@Param('id') id: string) {
    return await this.service.getBrandById(Number(id));
  }
}
