import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { NewThreadComponent } from '../new-thread/new-thread.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public modal: MatDialog) { }

  ngOnInit() {
  }

  signUpModal(): void {
    const modalref = this.modal.open(SignUpComponent, {
      minHeight: '500px',
      minWidth: '800px',
      disableClose: true
    });

    modalref.afterClosed().subscribe(result => {
    });
  }
  signInModal(): void {
    const modalref = this.modal.open(SignInComponent, {
      minHeight: '500px',
      minWidth: '800px',
      disableClose: true
    });

    modalref.afterClosed().subscribe(result => {
    });
  }
  addThread() {
    const modalref = this.modal.open(NewThreadComponent, {
      minHeight: '500px',
      minWidth: '800px',
      disableClose: true
    });

    modalref.afterClosed().subscribe(result => {
    });
  }
}
