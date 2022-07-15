import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignInComponent } from 'app/pages/sign-in/sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorMessagesModule } from '@components/material/error-messages/error-messages.module';

@NgModule({
    declarations: [
        AuthSignInComponent
    ],
    imports: [
        CommonModule,
        SignInRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        ReactiveFormsModule,
        ErrorMessagesModule
    ]
})
export class AuthSignInModule {}
