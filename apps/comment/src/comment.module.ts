import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CommentsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class CommentModule {}
