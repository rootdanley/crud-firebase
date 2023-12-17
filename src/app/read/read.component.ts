import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent {
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
