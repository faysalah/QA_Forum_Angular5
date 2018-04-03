import { Injectable , ViewContainerRef} from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  vartest: ViewContainerRef;

  test() {
    this.vartest.clear();
  }

}
