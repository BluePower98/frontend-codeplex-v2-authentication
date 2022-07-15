import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { ConfirmationRequiredComponent } from 'app/pages/confirmation-required/confirmation-required.component';
import { ConfirmationRequiredRoutingModule } from './confirmation-required-routing.module';

@NgModule({
    declarations: [
        ConfirmationRequiredComponent
    ],
    imports: [
        ConfirmationRequiredRoutingModule,
        MatButtonModule,
        FuseCardModule,
        SharedModule
    ]
})
export class AuthConfirmationRequiredModule { }
