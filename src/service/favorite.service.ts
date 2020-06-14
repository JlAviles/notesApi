import { Injectable } from "@nestjs/common";
import { FavoriteRepository } from "../repository/favorite.repository";
import { Favorite } from "../model/favorite.model";

@Injectable()
export class FavoriteService {

    constructor(private favorites : FavoriteRepository ){
        
    }
    
    async createFavorite(favorite): Promise<Favorite> {
        return this.favorites.createFavorite(favorite)
    };
    
    async findAllByUserId(userId: string): Promise<Favorite[]> {
        return this.favorites.findAllByUserId(userId);
    };
}