import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';

import { User } from './user.entity';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() user: User): NestResponse {
    const createdUser = this.usersService.create(user);

    const response = new NestResponseBuilder()
      .setStatus(HttpStatus.CREATED)
      .setHeaders({ Location: `/users/${createdUser.username}` })
      .setBody(createdUser)
      .build();

    return response;
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
