import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [];

  public create(user) {
    this.users.push(user);
    return user;
  }
}
