import { Test } from '@nestjs/testing';
import { NoteService } from '../../src/service/note.service';
import { NoteController } from '../../src/controller/note.controller';

describe('Notes', () => {
  let noteController: NoteController;
  let response;
  let noteService = {
    addNote: () => response, 
    findAllNotes: () => response,
    findNoteById: () => response,
    updateNote: () => response,
    deleteNote: () => response,                 
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
    response = 'note';
    expect(await noteController.addNote(response)).toBe(response);
  });

  it(`/GET note/id`, async () => {
    response = 'note';
    expect(await noteController.findNoteById('id')).toBe(response);
  });

  it(`/GET notes`, async () => {
    response = ['notes'];
    expect(await noteController.findAllNotes()).toBe(response);
  });

  it(`/PUT note`, async () => {
    response = 'note';
    expect(await noteController.updateNote('id', 'changes')).toBe(response);
  });

  it(`/DELETE note`, async () => {
    response = '';
    expect(await noteController.deleteNote('id')).toBe(response);
  });

});