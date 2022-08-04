import { Module } from '@nestjs/common';

// Controllers
import { UsersController } from './users/users.controller';

// Providers
import { UsersService } from './users/users.services';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
