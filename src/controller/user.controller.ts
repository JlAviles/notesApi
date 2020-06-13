import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {

    constructor(private user : UserService) {

  }

  @Post('/signup')
    async addUser(@Body() user): Promise<User> {
      return this.user.addUser(user);
  }

  @Get('/user/:username')
    async findUserByUsername(@Param('username') username: string,): Promise<User> {
      return this.user.findUserByUsername(username);
  }

  @Get('/user/:id')
    async findUserById(@Param('id') _id: string,): Promise<User> {
      return this.user.findUserById(_id);
  }

  @Put('/users/:id')
    async updateUser(
      @Param('id') _id: string,
      @Body() changes): Promise<User> {
        return this.user.updateUser(_id, changes);
  }

  @Delete('/note/delete/:id')
    async deleteUser(
      @Param('id') id: string): Promise<User> {
        return this.user.deleteUser(id);
  }
}