export class CreatePostCommand {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly authorName: string,
    public readonly title: string,
    public readonly content: string,
  ) {}
}
