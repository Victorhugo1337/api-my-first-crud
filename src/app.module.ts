import { Module } from '@nestjs/common';
import { BrandModule } from './modules/brand/brand.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BrandModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
