import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/api/auth/auth.service';
import { MyErrorStateMatcher } from '@directives/MyErrorStateMatcher';
import { fuseAnimations } from '@fuse/animations';
import { finalize } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, HttpErrorHandlerService } from '../../services/http-error-handler.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild(FormGroupDirective, { static: false }) formGroupDirective: FormGroupDirective
    form: FormGroup;
    errorMatcher: MyErrorStateMatcher;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private httpErrorHandlerService: HttpErrorHandlerService
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    get f(): {[key: string]: FormControl} {
        return this.form.controls as {[key: string]: FormControl};
    }

    signIn(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.form.disable();

        this.httpErrorHandlerService.setHandler(ErrorHandler.manual);

        this.authService.login(this.form.value)
            .pipe(
                finalize(() => {
                    this.form.enable();
                    this.httpErrorHandlerService.setHandler(ErrorHandler.automatic);
                })
            )
            .subscribe(
                () => {
                    this.formGroupDirective.resetForm();

                    const redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    this.router.navigateByUrl(redirectURL);
                },
                (err: HttpErrorResponse) => {
                    console.log(err.error?.message);
                }
            );
    }


    private buildForm() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            rememberMe: ['']
        });
    }
}
