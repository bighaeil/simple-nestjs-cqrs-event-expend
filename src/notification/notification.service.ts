import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendIfNeeded({
    postId,
    userId,
    authorName,
    title,
    content,
    tags,
  }: {
    postId: string;
    userId: string;
    authorName: string;
    title: string;
    content: string;
    tags: string[];
  }): Promise<void> {
    console.log('Sending notification for post:', {
      postId,
      userId,
      authorName,
      title,
      content,
    });
    console.log('Connected tags:', tags);
  }
}
