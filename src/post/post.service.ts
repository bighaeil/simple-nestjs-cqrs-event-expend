import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePostCommand } from './commands/create-post.command';
import { Post } from './entities/post.entity';
import { GetPostsByUserQuery } from './queries/get-posts-by-user.query';
import { UserService } from '../user/user.service';
import { TagService } from '../tag/tag.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class PostService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
    private readonly userService: UserService,
    private readonly tagService: TagService,
    private readonly notificationService: NotificationService,
  ) {}

  async createPost(
    id: string,
    userId: string,
    authorName: string,
    title: string,
    content: string,
    tags: string[],
  ): Promise<void> {
    await this.userService.checkPermission(userId);

    const post: Post = await this.commandBus.execute(
      new CreatePostCommand(id, userId, authorName, title, content),
    );

    const connectedTags = await this.tagService.createOrConnectTags(
      tags,
      post.id,
    );

    await this.notificationService.sendIfNeeded({
      postId: post.id,
      userId,
      authorName,
      title,
      content,
      tags: connectedTags,
    });
  }

  async getPostsByUser(userId: string): Promise<Post[]> {
    return this.queryBus.execute(new GetPostsByUserQuery(userId));
  }
}
