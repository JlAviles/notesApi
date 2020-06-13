import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../model/user.model";

@Injectable()
export class UserRepository {

    constructor(@InjectModel('User') 
      private userModel: Model<User>) {

    };

    addUser(user): Promise<User> {
      const newUser = new this.userModel(user);
      return newUser.save();
    };

    async findUserByUsername(username: string): Promise<User> {
      return this.userModel.findOne({username});
    };

    async findUserById(_id: string): Promise<User> {
      return this.userModel.findById({_id});
    };

    async updateUser(_id: string, changes): Promise<User> {
      return this.userModel.findByIdAndUpdate(
        {_id: _id},
        changes,
        {new: true});
    }

    async deleteUser(_id: string): Promise<User> {
      return this.userModel.findByIdAndDelete({_id});
    };

}