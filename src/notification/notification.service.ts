import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendIfNeeded(post: { id: string }, tags: any[]): Promise<void> {
    console.log('Sending notification for post:', post.id);
    console.log('Connected tags:', tags);
  }
}
