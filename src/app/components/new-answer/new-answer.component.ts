import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {

  constructor(private toastr: ToastrService, private appService: AppService) { }

  ngOnInit() {
  }

  close() {
    this.appService.closeAnswerInput();
    this.toastr.error('Answer input closed', 'want to close');
  }

  addAnswer() {
    confirm('add answer');
  }
}
