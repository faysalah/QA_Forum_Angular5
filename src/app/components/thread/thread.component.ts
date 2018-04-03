import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NewAnswerComponent } from '../new-answer/new-answer.component';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private toastr: ToastrService, private appService: AppService) {
  }

  ngOnInit() {
    this.appService.vartest = this.dynamicInsert;
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

  upVoteA() {
    this.toastr.success('Hello world!', 'up vote Answer!');
  }

  downVoteA() {
    this.toastr.success('Hello world!', 'down vote Answer!');
  }

  upVoteQ() {
    this.toastr.success('Hello world!', 'up vote Question!');
  }

  downVoteQ() {
    this.toastr.success('Hello world!', 'down vote Question!');
  }

}
