import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { IsUsernameAlreadyExist } from './Is-username-already-exist.validator';

export class User {
  id?: number;

  @IsString()
  @IsNotEmpty()
  @IsUsernameAlreadyExist({ message: 'Username already exists' })
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Exclude({ toPlainOnly: true })
  password: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  registerDate?: Date;
}
