import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NewAnswerComponent } from '../new-answer/new-answer.component';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../services/app.service';
import { ThreadService } from '../../services/thread.service';
import { Thread } from '../../models/thread';
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  thread: Thread;
  @ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private toastr: ToastrService, private appService: AppService,
     private threadService: ThreadService) {
  }

  ngOnInit() {
    this.appService.answerInputRef = this.dynamicInsert;
    this.thread = this.threadService.get_thread(1);
  }

  addAnswer() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewAnswerComponent);
    this.dynamicInsert.clear();
    this.dynamicInsert.createComponent(componentFactory);
  }

  addResponse() {
    this.toastr.success('Hello world!', 'Add Response!');
  }

  addComment() {
    this.toastr.success('Hello world!', 'Add Comment!');
  }
  upVoteQ() {
    this.toastr.success('Hello world!', 'up vote Question!');
    this.threadService.questionUpVote(1);
  }

  downVoteQ() {
    this.toastr.success('Hello world!', 'down vote Question!');
    this.threadService.questionDownVote(1);
  }

  upVoteA() {
    this.toastr.success('Hello world!', 'up vote Answer!');
    this.threadService.answerUpVote(1);
  }

  downVoteA() {
    this.toastr.success('Hello world!', 'down vote Answer!');
    this.threadService.answerDownVote(1);
  }
}
