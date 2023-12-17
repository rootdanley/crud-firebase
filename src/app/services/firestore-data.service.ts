import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {FormControl, ɵValue} from "@angular/forms";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  constructor(private firestore: AngularFirestore) { }


  addDataToBaseCollection(question: ɵValue<FormControl<string | null>> | undefined, answer: ɵValue<FormControl<string | null>> | undefined) {
    const data = { pergunta: question, resposta: answer };
    return this.firestore.collection('base').add(data);
  }

  getAllItems(): Observable<any[]> {
    return this.firestore.collection('base').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as { [key: string]: any };
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  deleteFromBaseCollection(docId: string): Promise<void> {
    return this.firestore.collection('base').doc(docId).delete();
  }

  updateBaseCollection(docId: string, data: { pergunta: string, resposta: string }): Promise<void> {
    return this.firestore.collection('base').doc(docId).update(data);
  }

}
