import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NewAnswerComponent } from '../new-answer/new-answer.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  addAnswer() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewAnswerComponent);
    this.dynamicInsert.clear();
    this.dynamicInsert.createComponent(componentFactory);
  }
  answerInputClose() {
    this.dynamicInsert.clear();
  }

  addResponse() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  addComment() {
    console.log('Add Comment');
  }
  upVoteA() {
    console.log('up vote Answer');
  }
  downVoteA() {
    console.log('down vote Answer');
  }
  upVoteQ() {
    console.log('up vote Question');
  }
  downVoteQ() {
    console.log('down vote Question');
  }

}
