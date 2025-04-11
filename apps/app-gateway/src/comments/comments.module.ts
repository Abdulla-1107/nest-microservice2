import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
      ClientsModule.register([
        {
          name: 'COMMENTS',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'comment_queue',
          },
        },
      ]),
    ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
