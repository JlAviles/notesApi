import { ModuleTokenFactory } from "@nestjs/core/injector/module-token-factory";

const { MongoClient } = require('mongodb');

describe('Favorites', () => {
  let connection;
  let db;
  let favorite;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://admin:7Ba5TeBSzlJflEn3@cluster0-e5gdr.mongodb.net/notesApi?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    db = await connection.db('notesApi-test');
    favorite = db.collection('favorites');
  });

  it('Insert and find by ID', async () => {
    const mockFavorite = {_id: '1', user: '5ee4fd0e185fb668fb86dd2d', note: '5ee4fd66185fb668fb86dd2e'};
    await favorite.insertOne(mockFavorite);

    const insertFavorite = await favorite.findOne({user: '5ee4fd0e185fb668fb86dd2d'});
    expect(insertFavorite).toEqual(mockFavorite);
  });

  afterAll(async () => {
    db.dropCollection('favorites');
    await connection.close();
    await db.close();
  });
});