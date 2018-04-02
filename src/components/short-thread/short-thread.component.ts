import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-short-thread',
  templateUrl: './short-thread.component.html',
  styleUrls: ['./short-thread.component.css']
})
export class ShortThreadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  viewThread() {
    this.router.navigate(['/thread']);
  }
}
