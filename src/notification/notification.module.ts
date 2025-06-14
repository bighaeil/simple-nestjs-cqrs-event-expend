import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CqrsModule } from '@nestjs/cqrs';
import { SendNotificationHandler } from './handlers/send-notification.handler';

@Module({
  imports: [CqrsModule],
  providers: [NotificationService, SendNotificationHandler],
})
export class NotificationModule {}
