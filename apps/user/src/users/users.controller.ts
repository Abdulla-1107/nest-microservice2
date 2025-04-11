import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @MessagePattern('user.all')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('user.one')
  findOne(@Payload() id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern('user.create')
  create(@Payload() data: any) {
    return this.userService.create(data);
  }

  @MessagePattern('user.update')
  update(@Payload() data: any) {
    return this.userService.Update(data.id, data);
  }
  @MessagePattern('user.delete')
  delete(@Payload() id: string) {
    return this.userService.Delete(id);
  }
}

