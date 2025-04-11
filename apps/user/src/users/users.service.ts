import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    let newUser = await this.prisma.user.create({ data });
    return { data: newUser };
  }
  async findAll() {
    return await this.prisma.user.findMany();
  }
  async findOne(id: string) {

    const user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      return { message: 'User topilmadi' };
    }
    return { data: user };
  }
  async Update(id: string, data: any) {
    let user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      return { message: 'User topilmadi' };
    }

    let updateUser = await this.prisma.user.update({
      where: { id },
      data: data,
    });

    return { data: updateUser };
  }

  async Delete(id: string) {
    let user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      return { message: 'user topilmadi' };
    }
    let deleteUser = await this.prisma.user.delete({ where: { id } });
    return { data: deleteUser };
  }
}
