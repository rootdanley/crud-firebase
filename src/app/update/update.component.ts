import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {FirestoreDataService} from "../services/firestore-data.service";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  updateForm: FormGroup;

  constructor(private fb: FormBuilder, private firestoreDataService: FirestoreDataService) {
    this.updateForm = this.fb.group({
      docId: ['', [Validators.required]],
      newQuestion: ['', [Validators.required]],
      newAnswer: ['', [Validators.required]]
    });
  }

  onUpdate() {
    if (this.updateForm.valid) {
      const docId = this.updateForm.get('docId')!.value;
      const newQuestion = this.updateForm.get('newQuestion')!.value;
      const newAnswer = this.updateForm.get('newAnswer')!.value;

      this.firestoreDataService.updateBaseCollection(docId, { pergunta: newQuestion, resposta: newAnswer })
        .then(() => {
          console.log('Document successfully updated!');
          this.updateForm.reset();
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    }
  }


}
