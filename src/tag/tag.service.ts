import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  private tags: Map<string, Set<string>> = new Map<string, Set<string>>();

  async createOrConnectTags(tags: string[], postId: string): Promise<string[]> {
    const connectedTags: string[] = [];

    for (const tag of tags) {
      if (!this.tags.has(tag)) {
        this.tags.set(tag, new Set<string>());
      }
      this.tags.get(tag)?.add(postId);
      connectedTags.push(tag);
    }

    return connectedTags;
  }

  async getAll(): Promise<string[]> {
    return Array.from(this.tags.keys());
  }
}
