import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Note } from "../model/note.model";

@Injectable()
export class NoteRepository {

    constructor(@InjectModel('Note') 
      private noteModel: Model<Note>) {

    };

    addNote(note): Promise<Note> {
      const newNote = new this.noteModel(note);
      return newNote.save();
    };

    async findAllNotes(): Promise<Note[]> {
      return this.noteModel.find();
    };

    async findNoteById(_id: string): Promise<Note> {
      return this.noteModel.findById({_id});
    };

    async updateNote(_id: string, changes): Promise<Note> {
      return this.noteModel.findByIdAndUpdate(
        {_id: _id},
        changes,
        {new: true});
    };

    async deleteNote(_id: string): Promise<Note> {
      return this.noteModel.findByIdAndDelete({_id});
    };

}