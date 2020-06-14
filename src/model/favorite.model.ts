import * as mongoose from 'mongoose';
import { User } from './user.model';
import { Note } from './note.model';

export class Favorite extends mongoose.Document {
  _id: string;
  user: User;
  note: Note;
}

export const FavoriteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true },
  note: { type: mongoose.Schema.Types.ObjectId, ref: 'Note', autopopulate: true }
});