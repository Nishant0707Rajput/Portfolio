import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private formBuilder:FormBuilder){

  }

  profileForm = this.formBuilder.group({
    name:['',Validators.required],
    email: ['',[ Validators.required,Validators.email]],
    phone: ['',Validators.required],
    description:['']
  });

  get f(){
    return this.profileForm.controls;
  }



}
