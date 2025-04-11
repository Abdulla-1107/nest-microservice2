import { Inject, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CommentsService {
  constructor(@Inject('COMMENTS') private commentClient: ClientProxy) {}
  create(createCommentDto: any) {
    return this.commentClient.send('createComment', createCommentDto);
  }

  findAll() {
    return this.commentClient.send('findAllComments', {});
  }

  findOne(id: string) {
    return this.commentClient.send('findOneComment', id);
  }

  update(id: string, updateCommentDto: any) {
    return this.commentClient.send('updateComment', {
      id,
      ...updateCommentDto,
    });
  }

  remove(id: string) {
    return this.commentClient.send('removeComment', id);
  }
}
