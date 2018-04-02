import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomMaterialModule } from './custom-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ThreadsComponent } from '../components/threads/threads.component';
import { ThreadComponent } from '../components/thread/thread.component';
import { ShortThreadComponent } from '../components/short-thread/short-thread.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'threads', pathMatch: 'full'},
  { path: 'threads', component: ThreadsComponent},
  { path: 'thread', component: ThreadComponent}
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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AppModule { }
