import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommand } from '../commands/create-post.command';
import { PostRepository } from '../repositories/post.repository';
import { Post } from '../entities/post.entity';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(command: CreatePostCommand): Promise<Post> {
    const { id, userId, authorName, title, content } = command;
    const post = new Post(id, userId, authorName, title, content);
    return await this.postRepository.createPost(post);
  }
}
