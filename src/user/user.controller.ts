import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: { id: string; name: string; email: string }) {
    return this.userService.createUser(body.id, body.name, body.email);
  }

  @Put('/:id')
  async updateUserName(
    @Param('id') id: string,
    @Body() body: { newName: string },
  ) {
    return this.userService.updateUserName(id, body.newName);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
