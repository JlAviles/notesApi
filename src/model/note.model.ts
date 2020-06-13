import * as mongoose from 'mongoose';
import { User } from './user.model';

export class Note extends mongoose.Document {
  _id: string;
  user: User;
  content: string;
}

export const NoteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true },
  content: { type: String}
});