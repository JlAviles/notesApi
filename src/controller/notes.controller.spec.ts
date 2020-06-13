import { Test } from '@nestjs/testing';
import { NoteService } from '../service/note.service';
import { NoteController } from './note.controller';

describe('Notes', () => {
  let noteController: NoteController;
  const response = ['notes'];
  let noteService = {
    addNote: () => response, 
    findAllNotes: () => response,
    findNoteById: () => response,
    updateNote: () => response,                 
};

  beforeAll(async () => {
    const note = await Test.createTestingModule({
        controllers: [NoteController], 
        providers: [NoteService],
    })
        .overrideProvider(NoteService)
        .useValue(noteService)
        .compile();

    noteController = note.get<NoteController>(NoteController);
  });

  it(`/POST note`, async () => {
    expect(await noteController.addNote(response)).toBe(response);
  });

  it(`/GET note/id`, async () => {
    expect(await noteController.findNoteById('id')).toBe(response);
  });

  it(`/GET notes`, async () => {
    expect(await noteController.findAllNotes()).toBe(response);
  });

  it(`/PUT note`, async () => {
    expect(await noteController.updateNote('_id', 'changes')).toBe(response);
  });

});