import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';

const routes: Route[] = [
  {
      path: '',
      component: ForgotPasswordComponent
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
export class ForgotPasswordRoutingModule { }
