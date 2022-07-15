import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseValidators } from '@fuse/validators';
import { HttpErrorResponse } from '@angular/common/http';
import { MyErrorStateMatcher } from '@directives/MyErrorStateMatcher';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/api/auth/auth.service';
import { SweetAlertService } from '@services/ui/sweet-alert.service';

@Component({
    selector: 'auth-reset-password',
    templateUrl: './reset-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ResetPasswordComponent implements OnInit
{
    @ViewChild(FormGroupDirective, { static: false }) formGroupDirective: FormGroupDirective
    form: FormGroup;
    errorMatcher: MyErrorStateMatcher;
    token: string = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private sweetAlertService: SweetAlertService
    ) {
        this.token = this.route.snapshot.paramMap.get('token');

        if (!this.token) {
            this.backToLoginPage();
        }
    }

    ngOnInit(): void {
        this.checkTokenResetPassword();
        this.buildForm();
    }

    get f(): {[key: string]: FormControl} {
        return this.form.controls as {[key: string]: FormControl};
    }

    resetPassword(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.form.disable();

        this.authService.resetPassword(this.form.value, this.token)
            .pipe(
                finalize(() => {
                    this.form.enable();
                })
            )
            .subscribe(
                (res) => {
                    this.formGroupDirective.resetForm();
                    this.sweetAlertService.confirm(res.message)
                        .then(({ isConfirmed }) => {
                            if (isConfirmed) {
                                this.backToLoginPage();
                            }   
                        })
                },
            );
    }

    private buildForm() {
        this.form = this.formBuilder.group({
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required]
        },
        {
            validators: FuseValidators.mustMatch('password', 'passwordConfirm')
        });
    }

    private backToLoginPage(): void {
        this.router.navigate(['/sign-in']);
    }

    private checkTokenResetPassword(): void {
        this.authService.verifyTokenResetPassword(this.token)
            .subscribe(
              () => {},
              (err: HttpErrorResponse) => {
                this.sweetAlertService.confirm(err.error?.message, {title: 'Error!', icon: 'error'})
                    .then(({ isConfirmed }) => {
                        if (isConfirmed) {
                            this.backToLoginPage();
                        }
                    })
              }
            );
    }

}
