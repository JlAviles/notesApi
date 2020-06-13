import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repository/user.repository";
import { User } from "../model/user.model";
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {

    constructor(private user : UserRepository) {

    };
    
    async addUser(user): Promise<User> {
      user.password = await bcrypt.hash(user.password, 10);
      return this.user.addUser(user);
    };

    async findUserByUsername(username: string): Promise<User> {
      return this.user.findUserByUsername(username);
    };

    async findUserById(_id: string): Promise<User> {
      return this.user.findUserById(_id);
    };

    async updateUser(id: string, changes): Promise<User> {
      return this.user.updateUser(id, changes);
    };

    async deleteUser(id: string): Promise<User> {
      return this.user.deleteUser(id);
  };

}