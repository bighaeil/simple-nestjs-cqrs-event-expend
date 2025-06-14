import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostsByUserQuery } from '../queries/get-posts-by-user.query';
import { PostRepository } from '../repositories/post.repository';
import { Post } from '../entities/post.entity';

@QueryHandler(GetPostsByUserQuery)
export class GetPostsByUserHandler
  implements IQueryHandler<GetPostsByUserQuery>
{
  constructor(private readonly postRepository: PostRepository) {}

  async execute(query: GetPostsByUserQuery): Promise<Post[]> {
    return this.postRepository.findByUserId(query.userId);
  }
}
