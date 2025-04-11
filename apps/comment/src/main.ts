import { NestFactory } from '@nestjs/core';
import { CommentModule } from './comment.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CommentModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'comment_queue',
      },
    },
  );
  await app.listen();
}
bootstrap();
