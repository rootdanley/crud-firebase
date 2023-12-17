import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { FirestoreDataService } from "../services/firestore-data.service";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrl: './deletar.component.scss'
})
export class DeletarComponent {
  deleteForm: FormGroup;
  items: any[] = []

  constructor(
    private fb: FormBuilder,
    private firestoreDataService: FirestoreDataService
  ) {
    this.deleteForm = this.fb.group({
      docId: ['', [Validators.required, Validators.minLength(1)]]
    })
    this.loadItems();
  }



  loadItems() {
    // Assuming the service has a method to get all items with their IDs
    this.firestoreDataService.getAllItems().subscribe(data => {
      this.items = data;
    });
  }


  onDelete() {
    if (this.deleteForm.valid) {
      const docId = this.deleteForm.get('docId')!.value;
      this.firestoreDataService.deleteFromBaseCollection(docId).then(() => {
        console.log('Document successfully deleted!');
        this.deleteForm.reset();
        this.loadItems(); // Reload items to update the list
      }).catch((error) => {
        console.error('Error removing document: ', error);
      });
    }
  }

}
