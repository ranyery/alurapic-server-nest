import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { User } from './user.entity';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() user: User): User {
    const createdUser = this.usersService.create(user);
    return createdUser;
  }

  @Get()
  public getAllUsers(): User[] {
    const users = this.usersService.getAllUsers();
    return users;
  }

  // @Get(':id')
  // public getUserById(@Param('id', ParseIntPipe) id: number): User {
  //   if (!id || id <= 0) throw new BadRequestException();

  //   const user = this.usersService.getUserById(id);
  //   if (!user) throw new NotFoundException('Usuário não encontrado!');

  //   return user;
  // }

  @Get(':username')
  public findUserByUsername(@Param('username') username: string): User {
    const user = this.usersService.getUserByUsername(username);
    if (!user) throw new NotFoundException('Usuário não encontrado!');
    return user;
  }
}
