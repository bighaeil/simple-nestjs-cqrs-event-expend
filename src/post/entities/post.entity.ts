export class Post {
  constructor(
    public id: string,
    public userId: string,
    public authorName: string,
    public title: string,
    public content: string,
  ) {}
}
