import { PartialType } from '@nestjs/mapped-types';
import { CreateCommet } from './comment.create.dto';

export class UpdateComment extends PartialType(CreateCommet) {
  id: string;
}
