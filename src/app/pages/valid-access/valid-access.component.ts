import { Component, OnInit, ViewChild } from '@angular/core';
import { FuseAlertType } from '@fuse/components/alert';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';


@Component({
  selector: 'app-valid-access',
  templateUrl: './valid-access.component.html',
  styleUrls: ['./valid-access.component.scss']
})
export class ValidAccessComponent implements OnInit {

  @ViewChild('validAccessNgForm') validAccessNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  form: FormGroup;
  showAlert: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      token: ['', [Validators.required]]
    });
  }

  validate(): void {
    /* const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzE3MzY1MjcsImlzcyI6IkZ1c2UiLCJleHAiOjE2MzIzNDEzMjd9.3_IPqAPxgRWn_XdBDddjoZXARjMil8uDo_kM-_-RkG0';

    if (this.form.get('token').value !== token) {
      return;
    } */
    console.log('regresando del modulo :>> ','regresando del modulo');
    // this.signIn();
  }

  signIn(): void {
    // Disable the form
    this.form.disable();

    // Hide the alert
    this.showAlert = false;

    const params = {
      email: 'hughes.brian@company.com',
      password: 'admin',
      rememberMe: ''
    };

    // Sign in
    // TODO: LLamada a servicio para validar token
    /* this.authService.signIn(params)
      .subscribe(
        () => {

          // Set the redirect url.
          // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
          // to the correct page after a successful sign in. This way, that url can be set via
          // routing file and we don't have to touch here.
          // const redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
          const redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/dashboard';

          this.authService.accessToken = this.form.get('token').value;

          // Navigate to the redirect url
          this.router.navigateByUrl(redirectURL);

        },
        (response) => {

          // Re-enable the form
          this.form.enable();

          // Reset the form
          this.validAccessNgForm.resetForm();

          // Set the alert
          this.alert = {
            type: 'error',
            message: 'Wrong email or password'
          };

          // Show the alert
          this.showAlert = true;
        }
      ); */
  }

}
