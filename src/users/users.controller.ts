import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from './users.services';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() user: User): User {
    const createdUser = this.usersService.create(user);
    return createdUser;
  }
}
