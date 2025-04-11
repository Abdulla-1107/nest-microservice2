import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
