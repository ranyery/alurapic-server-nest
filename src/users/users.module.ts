import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.services';
import { ISUserAlreadyExistConstraint } from './Is-username-already-exist.validator';
@Module({
  controllers: [UsersController],
  providers: [UsersService, ISUserAlreadyExistConstraint],
})
export class UsersModule {}
