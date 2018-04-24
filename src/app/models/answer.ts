import { AnswerComment } from './answer-comment';
import { User } from './user';
export class Answer {
    id: number;
    body: string;
    created_at: string;
    vote: number;
    user: User;
    comments: Array<AnswerComment>;
    constructor(body: string, created_at: string, comments: Array<AnswerComment>, vote: number,  user: User) {
        this.body = body;
        this.created_at = created_at;
        this.comments = comments;
        this.vote = vote;
        this.user = user;
    }
}
