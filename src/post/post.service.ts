import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePostCommand } from './commands/create-post.command';
import { Post } from './entities/post.entity';
import { GetPostsByUserQuery } from './queries/get-posts-by-user.query';

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
  ): Promise<void> {
    return this.commandBus.execute(
      new CreatePostCommand(id, userId, authorName, title, content),
    );
  }

  async getPostsByUser(userId: string): Promise<Post[]> {
    return this.queryBus.execute(new GetPostsByUserQuery(userId));
  }
}
