import * as mongoose from 'mongoose';

export class User extends mongoose.Document {
  _id: string;
  username: string;
  password: string;
}

export const UserSchema = new mongoose.Schema({
  username: { type: String},
  password: { type: String}
});