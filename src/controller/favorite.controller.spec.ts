import { Test } from '@nestjs/testing';
import { FavoriteController } from './favorite.controller';
import { FavoriteService } from '../service/favorite.service';

describe('Favorites', () => {
  let favoriteController: FavoriteController;
  const response = 'favorite';
  let favoriteService = {
    createFavorite: () => response, 
    findAllByUserId: () => response              
};

  beforeAll(async () => {
    const note = await Test.createTestingModule({
        controllers: [FavoriteController], 
        providers: [FavoriteService],
    })
        .overrideProvider(FavoriteService)
        .useValue(favoriteService)
        .compile();

    favoriteController = note.get<FavoriteController>(FavoriteController);
  });

  it(`/POST favorite`, async () => {
    expect(await favoriteController.createFavorite(response)).toBe(response);
  });

  it(`/GET all favorites by user ID`, async () => {
    expect(await favoriteController.findAllByUserId('id')).toBe(response);
  });

});