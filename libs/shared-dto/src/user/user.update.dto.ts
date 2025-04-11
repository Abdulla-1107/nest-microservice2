import { PartialType } from '@nestjs/mapped-types';
import { CreateUser } from './user.create.dto';

export class UpdateUser extends PartialType(CreateUser) {
  id: string;
}
