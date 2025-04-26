import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  providers: [BrandService, PrismaService],
  controllers: [BrandController],
  imports: [],
})
export class BrandModule {}
