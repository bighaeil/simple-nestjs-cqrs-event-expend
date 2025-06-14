import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserNameCommand } from '../commands/update-user-name.command';
import { UserRepository } from '../repositories/user.repository';
import { UserNameUpdatedEvent } from '../events/user-name-updated.event';

@CommandHandler(UpdateUserNameCommand)
export class UpdateUserNameHandler
  implements ICommandHandler<UpdateUserNameCommand>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: UpdateUserNameCommand): Promise<void> {
    const { id, newName } = command;
    const user = this.userRepository.updateUserName(id, newName);
    if (!user) {
      this.eventBus.publish(new UserNameUpdatedEvent(id, newName));
    }
  }
}
