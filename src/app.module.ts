import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './module/note.module';
import { NoteSchema } from './schema/note.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:7Ba5TeBSzlJflEn3@cluster0-e5gdr.mongodb.net/notesApi?retryWrites=true&w=majority'),
    NoteModule,
    MongooseModule.forFeature([{name: 'Note', schema: NoteSchema}]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
