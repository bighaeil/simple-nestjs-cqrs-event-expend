export class UpdateUserNameCommand {
  constructor(
    public readonly id: string,
    public readonly newName: string,
  ) {}
}
