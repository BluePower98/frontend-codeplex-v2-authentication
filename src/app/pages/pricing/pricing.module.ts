import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';

import { FuseCardModule } from '@fuse/components/card';
import { PricingComponent } from './pricing.component';
import { MaterialModule } from 'app/components/material/material.module';
import { PricingModulesListComponent } from './components/pricing-modules-list/pricing-modules-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RucValidator } from '@validators/ruc.validator';
import { SignUpModalComponent } from './components/sign-up-modal/sign-up-modal.component';

@NgModule({
  declarations: [
    PricingComponent,
    PricingModulesListComponent,
    SignUpModalComponent
  ],
  imports: [
    CommonModule,
    FuseCardModule,
    MaterialModule,
    PricingRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RucValidator
  ]
})
export class PricingModule { }
