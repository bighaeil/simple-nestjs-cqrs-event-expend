import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ConnectTagsCommand } from '../commands/connect-tags.command';
import { TagService } from '../tag.service';

@CommandHandler(ConnectTagsCommand)
export class ConnectTagsHandler implements ICommandHandler<ConnectTagsCommand> {
  constructor(private readonly tagService: TagService) {}

  async execute(command: ConnectTagsCommand): Promise<string[]> {
    const { tags, postId } = command;
    return this.tagService.createOrConnectTags(tags, postId);
  }
}
