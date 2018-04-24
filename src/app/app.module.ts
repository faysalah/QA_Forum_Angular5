import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomMaterialModule } from './custom-material.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { ThreadComponent } from './components/thread/thread.component';
import { ShortThreadComponent } from './components/short-thread/short-thread.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NewAnswerComponent } from './components/new-answer/new-answer.component';
import { NewThreadComponent } from './components/new-thread/new-thread.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';

import { AppService } from './services/app.service';
import { ThreadService } from './services/thread.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'threads', pathMatch: 'full'},
  { path: 'threads', component: ThreadsComponent},
  { path: 'thread/:id', component: ThreadComponent},
  { path: 'user', component: UserManagerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThreadsComponent,
    ThreadComponent,
    ShortThreadComponent,
    SignInComponent,
    SignUpComponent,
    NewThreadComponent,
    NewAnswerComponent,
    UserManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastrModule.forRoot({
      closeButton: true
    })
  ],
  providers: [
    AppService,
    ThreadService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SignInComponent,
    SignUpComponent,
    NewThreadComponent,
    NewAnswerComponent
  ]
})
export class AppModule { }
