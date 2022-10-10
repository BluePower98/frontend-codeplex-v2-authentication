import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { MyErrorStateMatcher } from '@directives/MyErrorStateMatcher';
import { fuseAnimations } from '@fuse/animations';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'auth-login',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit
{
    @ViewChild(FormGroupDirective, { static: false }) formGroupDirective: FormGroupDirective
    form: FormGroup;
    errorMatcher: MyErrorStateMatcher;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService
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

        this.authService.login(this.form.value)
            .pipe(
                finalize(() => this.form.enable())
            )
            .subscribe(
                () => {
                    this.formGroupDirective.resetForm();
                    console.log('this.activatedRoute.snapshot.queryParamMap', this.activatedRoute.snapshot);
                    const redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                    // const redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/select-module';
                    // console.log('redirectURL', redirectURL)
                    this.router.navigateByUrl(redirectURL);
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
