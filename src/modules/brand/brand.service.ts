import { Injectable } from '@nestjs/common';
import { Brand } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandService {
  constructor(private prismaService: PrismaService) {}

  async getBrandById(id: number): Promise<Brand | null> {
    const brand = await this.prismaService.brand.findUnique({
      where: {
        id,
      },
    });

    console.log('Brand', brand);

    return brand;
  }
}
