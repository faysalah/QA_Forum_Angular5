import { User } from './user';
export class ShortThread {
    id: number;
    question: string;
    answered: number;
    votes: number;
    user: User;
    tags: Array<string>;
    constructor(id: number, question: string, answered: number, votes: number,
    user: User, tags: Array<string>) {
        this.id = id;
        this.question = question;
        this.answered = answered;
        this.user = user;
        this.votes = votes;
        this.tags = tags;
    }
}
