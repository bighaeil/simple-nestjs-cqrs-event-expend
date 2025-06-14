import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entitiy';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const { id, name, email } = command;
    const user = new User(id, name, email);
    this.userRepository.createUser(user);
  }
}
