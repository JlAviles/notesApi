import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './module/note.module';
import { NoteSchema } from './model/note.model';
import { UserModule } from './module/user.module';
import { UserSchema } from './model/user.model';
import { FavoriteModule } from './module/favorite.module';
import { FavoriteSchema } from './model/favorite.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:7Ba5TeBSzlJflEn3@cluster0-e5gdr.mongodb.net/notesApi?retryWrites=true&w=majority', {
    connectionFactory: (connection) => { 
      connection.plugin(require('mongoose-autopopulate')); 
      return connection;
      }
    }),
    NoteModule,
    MongooseModule.forFeature([{name: 'Note', schema: NoteSchema}]),
    UserModule,
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    FavoriteModule,
    MongooseModule.forFeature([{name: 'Favorite', schema: FavoriteSchema}])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
