import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { User } from './entities/user.entitiy';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';
import { UpdateUserNameCommand } from './commands/update-user-name.command';

@Injectable()
export class UserService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  async createUser(id: string, name: string, email: string): Promise<User> {
    return this.commandBus.execute(new CreateUserCommand(name, email, id));
  }

  async updateUserName(id: string, newName: string): Promise<User> {
    return this.commandBus.execute(new UpdateUserNameCommand(id, newName));
  }

  async getUsers(): Promise<User[]> {
    return this.queryBus.execute(new GetUsersQuery());
  }

  async checkPermission(userId: string) {
    if (userId !== '1') {
      throw new Error('Permission denied');
    }
  }
}
