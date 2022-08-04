import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { UsersService } from './users.services';

@Injectable()
@ValidatorConstraint()
export class ISUserAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(private usersService: UsersService) {}
  validate(
    username: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    const user = this.usersService.getUserByUsername(username);
    return !user ? true : false;
  }
}

export function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ISUserAlreadyExistConstraint,
    });
  };
}
