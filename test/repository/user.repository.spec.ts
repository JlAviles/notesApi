import { ModuleTokenFactory } from "@nestjs/core/injector/module-token-factory";

const { MongoClient } = require('mongodb');

describe('Users', () => {
  let connection;
  let db;
  let user;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://admin:7Ba5TeBSzlJflEn3@cluster0-e5gdr.mongodb.net/notesApi?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    db = await connection.db('notesApi-test');
    user = db.collection('users');
  });

  it('Insert and find by ID', async () => {
    const mockUser = {_id: '1', username: 'Pepe', password: 'p3p3'};
    await user.insertOne(mockUser);

    const insertUser = await user.findOne({_id: '1'});
    expect(insertUser).toEqual(mockUser);
  });

  it('Insert and find by username', async () => {
    const mockUser = {_id: '2', username: 'John', password: 'p3p3'};
    await user.insertOne(mockUser);

    const insertUser = await user.findOne({username: 'John'});
    expect(insertUser).toEqual(mockUser);
  });

  it('Update', async () => {
    const mockUser = {_id: '3', username: 'Pepe', password: 'p3p3'};
    await user.insertOne(mockUser);

    const mockUpdate = await user.updateOne(
        {_id: '2'},
        {$set: {username: 'José'}},
        { upsert: true }
    );
    expect(mockUpdate).toEqual(mockUpdate);
  });

  it('Delete', async () => {
    const mockNote = {_id: '4', uusername: 'Pepe', password: 'p3p3'};
    await user.insertOne(mockNote);

    const deleteNote = await user.findOneAndDelete({_id: '3'});
    expect(deleteNote).toEqual(deleteNote);
  });

  afterAll(async () => {
    db.dropCollection('users');
    await connection.close();
    await db.close();
  });
});