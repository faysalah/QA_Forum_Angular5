import { Injectable } from '@angular/core';
import { ShortThread } from '../models/short-thread';
import { User } from '../models/user';
import { Thread } from '../models/thread';
import { QuestionResponse } from '../models/question-response';
import { Answer } from '../models/answer';
import { AnswerComment } from '../models/answer-comment';


@Injectable()
export class ThreadService {
  user: User;
  thread: Thread;
  short_thread: ShortThread;

  short_threads = Array<ShortThread>();
  responses = Array<QuestionResponse>();
  answers: Array<Answer>;
  comment: Array<AnswerComment>;

  constructor() {
    this.user = new User('Asif', 'asifme');
    this.short_thread = new ShortThread(1, 'question no 1 question no 1 question no 1 question no 1',
     20, 25, this.user, ['angular5', 'js']);
    this.short_threads.push(this.short_thread);
    this.user = new User('Andrew', 'andrewme');
    this.short_thread = new ShortThread(2, 'question no 2', 30, 28, this.user, ['vscode', 'C#']);
    this.short_threads.push(this.short_thread);
    this.user = new User('Hawking', 'hawkingme');
    this.short_thread = new ShortThread(3, 'question no 3', 24, 20, this.user, ['dotnet', 'entity framework']);
    this.short_threads.push(this.short_thread);
    this.user = new User('Ronaldo', 'ronaldome');
    this.short_thread = new ShortThread(4, 'question no 4', 22, 15, this.user, ['express', 'rest']);
    this.short_threads.push(this.short_thread);

    this.user = new User('Asif', 'asifme');
    const questionResponse = new QuestionResponse('this is question response', '27 may 2018', this.user);
    this.user = new User('Andrew', 'andrewme');
    const questionResponse1 = new QuestionResponse('this is question response1', '29 may 2018', this.user);
    this.user = new User('Hawking', 'hawkingme');
    const answerComment = new AnswerComment('this is answer comment', '27 may 2018', this.user);
    this.user = new User('Ronaldo', 'ronaldome');
    const answerComment1 = new AnswerComment('this is answer comment 1', '22 may 2018', this.user);

    this.user = new User('avijit', 'avijitme');
    const answer = new Answer('this is an answer', '27 may 2018', [answerComment, answerComment1], 33, this.user);
    this.user = new User('Musfiq', 'musfiqme');
    const answer1 = new Answer('this is an answer1', '28 may 2018', [answerComment, answerComment1], 44, this.user);
    this.user = new User('Minhaj', 'minhaj');

    this.thread = new Thread('this is an question', [questionResponse, questionResponse1], [answer, answer1],
    this.user, ['express', 'koa.js'], '12 may 2018', 55);
   }

  get_short_threads() {
    return this.short_threads;
  }

  get_thread(id: number) {
    return this.thread;
  }

  questionUpVote(questionid: number) {
    this.thread.vote = this.thread.vote + 1;
    console.log(this.thread.vote);
  }

  questionDownVote(questionid: number) {
    this.thread.vote = this.thread.vote + 1;
    console.log(this.thread.vote);
  }
  answerUpVote(answerid: number) {
    this.thread.answers[0].vote = this.thread.answers[0].vote + 1;
  }

  answerDownVote(answerid: number) {
    this.thread.answers[0].vote = this.thread.answers[0].vote - 1;
  }

  addThread() {
  }

  addAnswer(questionid: number) {

  }

  addResponse(questionid) {

  }

  addComment(answerid) {

  }
}
