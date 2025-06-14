import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostRepository } from './repositories/post.repository';
import { UpdatePostAuthorHandler } from './handlers/update-post-author.handler';
import { GetPostsByUserHandler } from './handlers/get-posts-by-user.handler';
import { CreatePostHandler } from './handlers/create-post.handler';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TagModule } from '../tag/tag.module';
import { NotificationModule } from '../notification/notification.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [CqrsModule, UserModule, TagModule, NotificationModule],
  providers: [
    PostRepository,
    CreatePostHandler,
    GetPostsByUserHandler,
    UpdatePostAuthorHandler,
    PostService,
  ],
  controllers: [PostController],
})
export class PostModule {}
