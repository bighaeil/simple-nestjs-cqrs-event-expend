import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from './repositories/user.repository';
import { CreateUserHandler } from './handlers/create-user.handler';
import { GetUsersHandler } from './handlers/get-users.handler';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UpdateUserNameHandler } from './handlers/update-user-name.handler';
import { CheckUserPermissionHandler } from './handlers/check-user-permission.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    UserRepository,
    CreateUserHandler,
    GetUsersHandler,
    UserService,
    UpdateUserNameHandler,
    CheckUserPermissionHandler,
  ],
  controllers: [UserController],
})
export class UserModule {}
