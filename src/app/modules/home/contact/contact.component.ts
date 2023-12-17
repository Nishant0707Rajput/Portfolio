import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { API_ROUTES } from 'src/app/constants/API_Routes';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private http: HttpService
  ) {}

  profileForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(3)],
    ],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    description: [''],
  });

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      this.toastr.error('Please fill the required details.');
      return;
    }
    this.http
      .post(API_ROUTES.saveUser, this.profileForm.value)
      .pipe()
      .subscribe({
        next: (res) => {
          this.toastr.success("Thanks, details saved successfully!");
        },
        error: (err) => {
          this.toastr.error("Some error occured while saving details.");
        },
      });
  }
}
