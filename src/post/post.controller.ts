import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(
    @Body()
    body: {
      id: string;
      userId: string;
      authorName: string;
      title: string;
      content: string;
      tags: string[];
    },
  ) {
    return this.postService.createPost(
      body.id,
      body.userId,
      body.authorName,
      body.title,
      body.content,
      body.tags,
    );
  }

  @Get('/users/:userId')
  async getPostsByUser(@Param('userId') userId: string) {
    return this.postService.getPostsByUser(userId);
  }
}
