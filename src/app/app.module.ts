import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: "AIzaSyDX35SqH6YQGnKg5R0pAlN2kzGtePJhDUw",
    authDomain: "what-i-do-c9b3e.firebaseapp.com",
    databaseURL: "https://what-i-do-c9b3e.firebaseio.com",
    projectId: "what-i-do-c9b3e",
    storageBucket: "what-i-do-c9b3e.appspot.com",
    messagingSenderId: "347027283029"
};


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, //Firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
