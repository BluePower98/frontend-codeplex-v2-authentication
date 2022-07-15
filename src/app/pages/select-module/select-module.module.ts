import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectModuleRoutingModule } from './select-module-routing.module';
import { SelectModuleComponent } from './select-module.component';
import { MatIconModule } from '@angular/material/icon';
// import { FuseCardModule } from '../../../../../@fuse/components/card/card.module';
import { FuseCardModule } from '@fuse/components/card';
// import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SelectModuleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FuseCardModule,
    // SharedModule,
    SelectModuleRoutingModule
  ]
})
export class SelectModuleModule { }
