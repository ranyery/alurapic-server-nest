import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users = [];

  public create(user: User): User {
    this.users.push(user);
    return user;
  }
}
