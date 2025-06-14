import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePostCommand } from './commands/create-post.command';
import { Post } from './entities/post.entity';
import { GetPostsByUserQuery } from './queries/get-posts-by-user.query';
import { CheckUserPermissionQuery } from '../user/queries/check-user-permission.query';
import { ConnectTagsCommand } from '../tag/commands/connect-tags.command';
import { SendNotificationCommand } from '../notification/commands/send-notification.command';

@Injectable()
export class PostService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  async createPost(
    id: string,
    userId: string,
    authorName: string,
    title: string,
    content: string,
    tags: string[],
  ): Promise<void> {
    await this.queryBus.execute(new CheckUserPermissionQuery(userId));

    const post: Post = await this.commandBus.execute(
      new CreatePostCommand(id, userId, authorName, title, content),
    );

    const connectedTags: string[] = await this.commandBus.execute(
      new ConnectTagsCommand(tags, post.id),
    );

    this.commandBus.execute(
      new SendNotificationCommand(
        post.id,
        userId,
        authorName,
        title,
        content,
        connectedTags,
      ),
    );
  }

  async getPostsByUser(userId: string): Promise<Post[]> {
    return this.queryBus.execute(new GetPostsByUserQuery(userId));
  }
}
