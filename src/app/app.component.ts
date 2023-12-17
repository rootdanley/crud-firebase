import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import {FirestoreDataService} from "./services/firestore-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('base').valueChanges();
  }

  getItems() {
    this.items = this.firestore.collection('base').valueChanges();
    this.items.subscribe(data => {
      console.log(data); // Here you have your data from Firestore
    });
  }


}
