import { User } from './user';
export class AnswerComment {
    body: string;
    created_at: string;
    user: User;
    constructor(body: string, created_at: string,  user: User) {
        this.body = body;
        this.created_at = created_at;
        this.user = user;
    }
}
