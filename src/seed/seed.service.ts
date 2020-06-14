import { Injectable, Logger } from "@nestjs/common";
import { UserRepository } from "../repository/user.repository";
import { NoteRepository } from "../repository/note.repository";
import { FavoriteRepository } from "../repository/favorite.repository";
import { User } from "../model/user.model";
import { Note } from "src/model/note.model";
import { Favorite } from "src/model/favorite.model";
const bcrypt = require('bcryptjs');

@Injectable()
export class SeedService {

    constructor(
        private user : UserRepository,
        private note : NoteRepository,
        private favorite : FavoriteRepository,
        private logger : Logger ){
        
    }

    async runSeed() {
        const dbEmpty = await this.dbEmpty();
        if (!dbEmpty) {
            const users = await this.seedUsers();
            const notes = await this.seedNotes(users);
            await this.seedFavorites(users, notes);
        } else {
            this.logger.debug('Database is already seeded');
        }
    };
    
    async seedUsers(): Promise<User[]> {
        
        const userOne = await this.user.addUser({username: "José", password: await bcrypt.hash('j0s3', 10)});
        const userTwo = await this.user.addUser({username: "Luis", password: await bcrypt.hash('lu1s', 10)});

        return await Promise.all([userOne, userTwo]); 
    };

    async seedNotes(users: User[]): Promise<Note[]> {

        const noteOne = await this.note.addNote({user: users[0], content: "Note test"});
        const noteTwo = await this.note.addNote({user: users[1], password: "Another note"});

        return await Promise.all([noteOne, noteTwo]); 
    };

    async seedFavorites(users: User[], notes: Note[]): Promise<Favorite> {

        return await this.favorite.createFavorite({user: users[0], note: notes[1]});
    };

    async dbEmpty(): Promise<boolean> {
        const allUsers = await this.user.findAllUsers();
        return await !!allUsers.length
    };
    
}