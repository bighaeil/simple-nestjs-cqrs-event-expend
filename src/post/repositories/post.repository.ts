import { Injectable } from '@nestjs/common';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostRepository {
  private posts: Post[] = [];

  createPost(post: Post): void {
    this.posts.push(post);
  }

  updateUserNameInPosts(userId: string, newName: string): void {
    this.posts.forEach((post) => {
      if (post.userId === userId) {
        post.authorName = newName;
      }
    });
  }

  findByUserId(userId: string): Post[] {
    return this.posts.filter((post) => post.userId === userId);
  }

  findAll(): Post[] {
    return this.posts;
  }
}
