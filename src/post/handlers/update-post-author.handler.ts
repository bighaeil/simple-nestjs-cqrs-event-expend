import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserNameUpdatedEvent } from '../../user/events/user-name-updated.event';
import { PostRepository } from '../repositories/post.repository';

@EventsHandler(UserNameUpdatedEvent)
export class UpdatePostAuthorHandler
  implements IEventHandler<UserNameUpdatedEvent>
{
  constructor(private readonly postRepository: PostRepository) {}

  async handle(event: UserNameUpdatedEvent): Promise<void> {
    const { userId, newName } = event;
    await this.postRepository.updateUserNameInPosts(userId, newName);
  }
}
