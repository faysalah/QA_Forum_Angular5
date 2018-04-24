import { Injectable , ViewContainerRef} from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  answerInputRef: ViewContainerRef;

  closeAnswerInput() {
    this.answerInputRef.clear();
  }

}
