import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { MyErrorStateMatcher } from '@directives/MyErrorStateMatcher';
import { AuthService } from '@core/services/auth/auth.service';

import { SweetAlertService } from '@services/ui/sweet-alert.service';

@Component({
    selector: 'auth-forgot-password',
    templateUrl: './forgot-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ForgotPasswordComponent implements OnInit
{
    @ViewChild(FormGroupDirective, { static: false }) formGroupDirective: FormGroupDirective
    form: FormGroup;
    errorMatcher: MyErrorStateMatcher;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private sweetAlertService: SweetAlertService
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    get f(): {[key: string]: FormControl} {
        return this.form.controls as {[key: string]: FormControl};
    }

    sendResetLink(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.form.disable();

        this.authService.forgotPassword(this.f.email.value)
            .pipe(
                finalize(() => {
                    this.form.enable();
                })
            )
            .subscribe((res: any) => {
                this.formGroupDirective.resetForm();
                this.sweetAlertService.success(res.message)
            });
    }

    private buildForm() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
}
