import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { ConnectTagsHandler } from './handlers/connect-tags.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [TagService, ConnectTagsHandler],
  controllers: [TagController],
})
export class TagModule {}
