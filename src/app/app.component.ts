import { Component } from '@angular/core';

//Importar firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery List';

  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor( public af: AngularFireDatabase) {
    this.items = af.list('/Groceries', {
      query: {
        limitToLast: 50
      }
    });

  }
  
  Send(desc: string) {
      this.items.push({ item: desc});
      this.msgVal = '';
  }

}
