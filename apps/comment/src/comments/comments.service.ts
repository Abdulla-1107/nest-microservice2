import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCommentDto: any) {
    const comment = await this.prisma.comment.create({
      data: createCommentDto,
    });
    return { data: comment };
  }

  async findAll() {
    return await this.prisma.comment.findMany();
  }

  async findOne(id: string) {
    const comment = await this.prisma.comment.findFirst({ where: { id } });
    if (!comment) {
      return { message: 'comment topilmadi' };
    }
    return { data: comment };
  }

  async update(id: string, updateCommentDto: any) {
    const comment = await this.prisma.comment.findFirst({ where: { id } });
    if (!comment) {
      return { message: 'comment topilmadi' };
    }
    let updateComment = await this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });
    return { data: updateComment };
  }

  async remove(id: string) {
    const comment = await this.prisma.comment.findFirst({ where: { id } });
    if (!comment) {
      return { message: 'comment topilmadi' };
    }
    let deleteComment = await this.prisma.comment.delete({ where: { id } });
    return { data: deleteComment };
  }
}
