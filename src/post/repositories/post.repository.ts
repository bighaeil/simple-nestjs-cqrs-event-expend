import { Injectable } from '@nestjs/common';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostRepository {
  private posts: Post[] = [];

  async createPost(post: Post): Promise<Post> {
    this.posts.push(post);
    return post;
  }

  async updateUserNameInPosts(userId: string, newName: string): Promise<void> {
    this.posts.forEach((post) => {
      if (post.userId === userId) {
        post.authorName = newName;
      }
    });
  }

  async findByUserId(userId: string): Promise<Post[]> {
    return this.posts.filter((post) => post.userId === userId);
  }

  async findAll(): Promise<Post[]> {
    return this.posts;
  }
}
