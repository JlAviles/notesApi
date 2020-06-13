import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteController } from '../controller/note.controller';
import { NoteRepository } from '../repository/note.repository';
import { NoteSchema } from '../model/note.model';
import { NoteService } from '../service/note.service';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          name: 'Note', schema: NoteSchema
        }
      ])
    ],
    controllers: [
      NoteController
    ],
    providers: [
      NoteRepository,
      NoteService
    ],
  })

export class NoteModule {}