export class ConnectTagsCommand {
  constructor(
    public readonly tags: string[],
    public readonly postId: string,
  ) {}
}
