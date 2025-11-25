import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-auto-form',
  standalone: false,
  templateUrl: './auto-form.html',
  styleUrl: './auto-form.css'
})
export class AutoForm {

  form!: UntypedFormGroup

  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      //id: '',
      color:'',
      marka:'',
      year: '',
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
