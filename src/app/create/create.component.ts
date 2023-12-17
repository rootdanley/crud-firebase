import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FirestoreDataService } from "../services/firestore-data.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
    dataForm = new FormGroup({
    question: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required])
  });

  constructor(private firestoreDataService: FirestoreDataService) { }
  onSubmit() {
    if (this.dataForm.valid) {
      this.firestoreDataService.addDataToBaseCollection(
        // this.dataForm.value.question,
        this.dataForm.value.question,
        this.dataForm.value.answer
      ).then(() => {
        console.log('Data added successfully');
        this.dataForm.reset(); // Reset the form after successful submit
      }).catch(error => {
        console.error('Error adding data: ', error);
      });
    }
  }





}
