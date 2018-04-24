import { Component, OnInit } from '@angular/core';
import { ShortThread } from '../../models/short-thread';
import { ThreadService } from '../../services/thread.service';
@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  // heros = [
  //   { id: 1, name: 'Superman' },
  //   { id: 2, name: 'Batman' },
  //   { id: 5, name: 'BatGirl' },
  //   { id: 3, name: 'Robin' },
  //   { id: 4, name: 'Flash' }
  // ];
  // heros1 = [
  //   { id: 1, name: 'Superman' },
  //   { id: 2, name: 'Batman' },
  //   { id: 5, name: 'BatGirl' },
  //   { id: 3, name: 'Robin' }
  // ];
  // heros3 = [
  //   { id: 1, name: 'Superman' },
  //   { id: 2, name: 'Batman' },
  //   { id: 5, name: 'BatGirl' }
  // ];
  // heros4 = [
  //   { id: 1, name: 'Superman' },
  //   { id: 2, name: 'Batman' }
  // ];

  short_threads: Array<ShortThread>;
  constructor(private threadService: ThreadService) { }

  ngOnInit() {
   this.short_threads = this.threadService.get_short_threads();
  }
}
