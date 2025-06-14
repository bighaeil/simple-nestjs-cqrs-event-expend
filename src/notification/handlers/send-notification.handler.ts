import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotificationService } from '../notification.service';
import { SendNotificationCommand } from '../commands/send-notification.command';

@CommandHandler(SendNotificationCommand)
export class SendNotificationHandler
  implements ICommandHandler<SendNotificationCommand>
{
  constructor(private readonly notificationService: NotificationService) {}

  async execute(command: SendNotificationCommand): Promise<void> {
    await this.notificationService.sendIfNeeded({ ...command });
  }
}
