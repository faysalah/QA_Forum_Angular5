import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShortThread } from '../../models/short-thread';

@Component({
  selector: 'app-short-thread',
  templateUrl: './short-thread.component.html',
  styleUrls: ['./short-thread.component.css']
})
export class ShortThreadComponent implements OnInit {

  @Input() short_thread: ShortThread;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewThread() {
    this.router.navigate(['/thread', this.short_thread.id]);
  }
}
