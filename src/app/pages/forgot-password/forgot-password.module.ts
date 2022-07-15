import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { ForgotPasswordComponent } from 'app/pages/forgot-password/forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        ForgotPasswordRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthForgotPasswordModule {}
