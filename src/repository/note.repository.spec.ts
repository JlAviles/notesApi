import { ModuleTokenFactory } from "@nestjs/core/injector/module-token-factory";

const { MongoClient } = require('mongodb');

describe('insert', () => {
  let connection;
  let db;
  let note;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://admin:7Ba5TeBSzlJflEn3@cluster0-e5gdr.mongodb.net/notesApi?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    db = await connection.db('notesApi-test');
    note = db.collection('test');
  });

  it('Insert and find by ID', async () => {
    const mockNote = {_id: '1', userId: '5ee48010d21f1c154cf0758c', content: 'Note test'};
    await note.insertOne(mockNote);

    const insertNote = await note.findOne({_id: '1'});
    expect(insertNote).toEqual(mockNote);
  });

  it('Update', async () => {
    const mockNote = {_id: '2', userId: '5ee48010d21f1c154cf0758c', content: 'Note test'};
    await note.insertOne(mockNote);

    const mockUpdate = await note.updateOne(
        {_id: '2'},
        {$set: {content: 'Update note'}},
        { upsert: true }
    );
    expect(mockUpdate).toEqual(mockUpdate);
  });

  it('Delete', async () => {
    const mockNote = {_id: '3', userId: '5ee48010d21f1c154cf0758c', content: 'Note test'};
    await note.insertOne(mockNote);

    const deleteNote = await note.findOneAndDelete({_id: '3'});
    expect(deleteNote).toEqual(deleteNote);
  });

  afterAll(async () => {
    db.dropCollection('test');
    await connection.close();
    await db.close();
  });
});