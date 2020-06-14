import { Test } from '@nestjs/testing';
import { FavoriteController } from '../../src/controller/favorite.controller';
import { FavoriteService } from '../../src/service/favorite.service';

describe('Favorites', () => {
  let favoriteController: FavoriteController;
  let response;
  let favoriteService = {
    createFavorite: () => response, 
    findAllByUserId: () => response             
  };

  beforeAll(async () => {
    const favorite = await Test.createTestingModule({
        controllers: [FavoriteController], 
        providers: [FavoriteService],
    })
        .overrideProvider(FavoriteService)
        .useValue(favoriteService)
        .compile();

    favoriteController = favorite.get<FavoriteController>(FavoriteController);
  });

  it(`/POST favorite`, async () => {
    response = 'favorite';
    expect(await favoriteController.createFavorite(response)).toBe(response);
  });

  it(`/GET all favorites by user ID`, async () => {
    response = ['favorite']
    expect(await favoriteController.findAllByUserId('id')).toBe(response);
  });

});