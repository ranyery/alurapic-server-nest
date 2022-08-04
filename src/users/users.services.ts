import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'ranyery',
      email: 'ranyery@mail.com',
      password: 'changeit123',
      fullname: 'Ranyery Santos Coutinho',
      registerDate: new Date(),
    },
  ];

  public create(user: User): User {
    this.users.push(user);
    return user;
  }

  public getAllUsers(): User[] {
    return this.users;
  }

  // public getUserById(id: number): User {
  //   const user = this.users.find((user) => user.id === id);
  //   return user;
  // }

  public getUserByUsername(username: string): User {
    const user = this.users.find((user) => user.username === username);
    return user;
  }
}
