import { QuestionResponse } from './question-response';
import { Answer } from './answer';
import { User } from './user';

export class Thread {
    id: number;
    question: string;
    vote: number;
    created_at: string;
    user: User;
    tags: Array<string>;
    responses: Array<QuestionResponse>;
    answers: Array<Answer>;
    constructor(question: string, responses: Array<QuestionResponse>, answers: Array<Answer>, user: User,
         tags: Array<string>, created_at: string, vote: number) {
        this.question = question;
        this.answers = answers;
        this.responses = responses;
        this.user = user;
        this.tags = tags;
        this.created_at = created_at;
        this.vote = vote;
    }
}
