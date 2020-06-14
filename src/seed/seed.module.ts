import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from '../model/note.model';
import { UserSchema } from '../model/user.model';
import { FavoriteSchema } from '../model/favorite.model';
import { NoteRepository } from '../repository/note.repository';
import { FavoriteRepository } from '../repository/favorite.repository';
import { UserRepository } from '../repository/user.repository';
import { SeedService } from './seed.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URL, {
    connectionFactory: (connection) => { 
      connection.plugin(require('mongoose-autopopulate')); 
      return connection;
      }
    }),
    MongooseModule.forFeature([{name: 'Note', schema: NoteSchema}]),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    MongooseModule.forFeature([{name: 'Favorite', schema: FavoriteSchema}])
  ],
  providers: [
      UserRepository,
      NoteRepository,
      FavoriteRepository,
      SeedService,
      Logger
  ],
})
export class SeedModule {}
