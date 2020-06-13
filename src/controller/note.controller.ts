import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Note } from '../model/note.model';
import { NoteService } from '../service/note.service';

@Controller()
export class NoteController {

    constructor(private notes : NoteService) {

    }

    @Post('/note')
    async addNote(@Body() note): Promise<Note> {
        return this.notes.addNote(note);
    }

    @Get('/notes')
    async findAllNotes(): Promise<Note[]> {
        return this.notes.findAllNotes();
    }

    @Get('/note/:id')
    async findNoteById(@Param('id') _id: string,): Promise<Note> {
        return this.notes.findNoteById(_id);
    }

    @Put('/notes/:id')
    async updateNote(
        @Param('id') _id: string,
        @Body() changes): Promise<Note> {
            return this.notes.updateNote(_id, changes);
    }

    @Delete('/note/delete/:id')
    async deleteNote(
        @Param('id') _id: string): Promise<Note> {
            return this.notes.deleteNote(_id);
    }
        
}