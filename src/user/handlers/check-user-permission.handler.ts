import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CheckUserPermissionQuery } from '../queries/check-user-permission.query';
import { UserService } from '../user.service';

@QueryHandler(CheckUserPermissionQuery)
export class CheckUserPermissionHandler
  implements IQueryHandler<CheckUserPermissionQuery>
{
  constructor(private readonly userService: UserService) {}

  async execute(query: CheckUserPermissionQuery): Promise<void> {
    await this.userService.checkPermission(query.id);
  }
}
