import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/core/user/user.service';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from '@services/api/auth/auth.service';

@Component({
    selector     : 'auth-unlock-session',
    templateUrl  : './unlock-session.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class UnlockSessionComponent implements OnInit
{
    @ViewChild('unlockSessionNgForm') unlockSessionNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    name: string;
    showAlert: boolean = false;
    unlockSessionForm: FormGroup;

    private _email: string;

    /**
     * Constructor
     */
    constructor(
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the user's name
        this.userService.user$.subscribe((user) => {
            this.name = user.name;
            this._email = user.email;
        });

        // Create the form
        this.unlockSessionForm = this.formBuilder.group({
            name: [
                {
                    value: this.name,
                    disabled: true
                }
            ],
            password: ['', Validators.required]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Unlock
     */
    unlock(): void {
        // Return if the form is invalid
        if (this.unlockSessionForm.invalid) {
            return;
        }

        // Disable the form
        this.unlockSessionForm.disable();

        // Hide the alert
        this.showAlert = false;

        // TODO: LLamar a servicio para unlock.session
        /* this.authService.unlockSession({
            email: this._email ?? '',
            password: this.unlockSessionForm.get('password').value
        }).subscribe(
            () => {

                // Set the redirect url.
                // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                // to the correct page after a successful sign in. This way, that url can be set via
                // routing file and we don't have to touch here.
                const redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                // Navigate to the redirect url
                this.router.navigateByUrl(redirectURL);

            },
            (response) => {

                // Re-enable the form
                this.unlockSessionForm.enable();

                // Reset the form
                this.unlockSessionNgForm.resetForm({
                    name: {
                        value: this.name,
                        disabled: true
                    }
                });

                // Set the alert
                this.alert = {
                    type: 'error',
                    message: 'Invalid password'
                };

                // Show the alert
                this.showAlert = true;
            }
        ); */
    }
}
