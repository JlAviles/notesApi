import { Injectable } from "@nestjs/common";
import { NoteRepository } from "../repository/note.repository";
import { Note } from "../model/note.model";

@Injectable()
export class NoteService {

    constructor(private notes : NoteRepository ){
        
    }
    
    async addNote(note): Promise<Note> {
        return this.notes.addNote(note)
    };
    
    async findAllNotes(): Promise<Note[]> {
        return this.notes.findAllNotes();
    };
    
    async findNoteById(_id: string): Promise<Note> {
        return this.notes.findNoteById(_id);
    };
    
    async updateNote(_id: string, changes): Promise<Note> {
        return this.notes.updateNote(_id, changes);
    };

    async deleteNote(_id: string): Promise<Note> {
        return this.notes.deleteNote(_id);
    };
}