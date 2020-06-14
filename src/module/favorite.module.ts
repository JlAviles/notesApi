import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoriteSchema } from '../model/favorite.model';
import { FavoriteRepository } from '../repository/favorite.repository';
import { FavoriteController } from '../controller/favorite.controller';
import { FavoriteService } from '../service/favorite.service';
import { UserRepository } from '../repository/user.repository';
import { UserSchema } from 'src/model/user.model';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          name: 'Favorite', schema: FavoriteSchema
        }
      ]),
      MongooseModule.forFeature([
        {
          name: 'User', schema: UserSchema
        }
      ])
    ],
    controllers: [
      FavoriteController
    ],
    providers: [
      FavoriteRepository,
      FavoriteService,
      UserRepository
    ],
  })

export class FavoriteModule {}