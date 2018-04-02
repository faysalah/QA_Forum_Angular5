import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addAnswer() {
    alert('hello');
  }
  addResponse() {
    console.log('Add Response');
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
