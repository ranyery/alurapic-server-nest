import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() user) {
    return this.usersService.create(user);
  }
}
