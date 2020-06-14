import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Favorite } from "../model/favorite.model";
import { UserRepository } from "./user.repository";

@Injectable()
export class FavoriteRepository {

    constructor(
      @InjectModel('Favorite') private favModel: Model<Favorite>,
      private user : UserRepository) {

    };

    createFavorite(favorite): Promise<Favorite> {
      const newFavorite = new this.favModel(favorite);
      return newFavorite.save();
    };

    async findAllByUserId(userId: string): Promise<Favorite[]> {
        const user = await this.user.findUserById(userId);
        return this.favModel.find({user});
    };

}