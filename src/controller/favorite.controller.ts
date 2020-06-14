import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FavoriteService } from '../service/favorite.service';
import { Favorite } from '../model/favorite.model';

@Controller()
export class FavoriteController {
    static findAllNotes: any;
    static createFavorite(): any {
        throw new Error("Method not implemented.");
    }
    constructor(private favorite : FavoriteService) {

    }

    @Post('/note/favorite')
    async createFavorite(@Body() favorite): Promise<Favorite> {
        return this.favorite.createFavorite(favorite);
    }

    @Get('/user/:id/favorites')
    async findAllByUserId(@Param('id') userId: string,): Promise<Favorite[]> {
        return this.favorite.findAllByUserId(userId);
    }
}