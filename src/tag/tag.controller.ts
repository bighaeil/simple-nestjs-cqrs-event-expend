import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('/tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async getAllTags() {
    return this.tagService.getAll();
  }
}
