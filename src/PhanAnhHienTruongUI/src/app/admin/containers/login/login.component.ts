import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAdminService } from '../../services/auth-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthAdminService
  ) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.invalid) {
      return;
    }

    const { userName, password } = this.validateForm.value;

    this.authService
      .signIn(userName, password)
      .subscribe((res) => this.router.navigateByUrl('/admin'));

    // if (this.validateForm.valid) {
    //   const { userName, password } = this.validateForm.value;

    //   this.authService.login(userName, password).subscribe(
    //     () => this.router.navigateByUrl('/'),
    //     (err) => alert(err.msg)
    //   );
    // }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
