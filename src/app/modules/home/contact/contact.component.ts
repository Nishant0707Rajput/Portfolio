import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private formBuilder:FormBuilder, private toastr:ToastrService){

  }

  profileForm = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email: ['',[ Validators.required,Validators.email,Validators.minLength(3)]],
    phone: ['',[Validators.required,Validators.minLength(8)]],
    description:['']
  });

  get f(){
    return this.profileForm.controls;
  }

  onSubmit(){
    if(this.profileForm.invalid){
      this.toastr.error("Please fill the required details.");
      return;
    } 
    // console.log(this.profileForm.value);
  }



}
