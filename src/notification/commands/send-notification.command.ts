export class SendNotificationCommand {
  constructor(
    public readonly postId: string,
    public readonly userId: string,
    public readonly authorName: string,
    public readonly title: string,
    public readonly content: string,
    public readonly tags: string[],
  ) {}
}
