import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ConfirmationRequiredComponent } from './confirmation-required.component';

const routes: Route[] = [
  {
      path: '',
      component: ConfirmationRequiredComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ConfirmationRequiredRoutingModule { }
