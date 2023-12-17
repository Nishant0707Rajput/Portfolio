import { Component, OnInit } from '@angular/core';
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
export class ContactComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _http: HttpService
  ) {}

  ngOnInit() {
    this._http.get(API_ROUTES.checkServer).subscribe((res) => {
      console.log(res);
    });
  }

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
    this._http
      .post(API_ROUTES.saveUser, this.profileForm.value)
      .pipe()
      .subscribe({
        next: (res) => {
          this.toastr.success('Thanks, we will catch up soon.');
        },
        error: (err) => {
          this.toastr.error(
            err?.error?.message
              ? err.error.message
              : 'Some error occured while saving details!'
          );
        },
      });
  }
}
