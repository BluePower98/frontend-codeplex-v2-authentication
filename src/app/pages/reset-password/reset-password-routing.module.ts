import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from 'app/pages/reset-password/reset-password.component';

const routes: Route[] = [
  {
      path: '',
      component: ResetPasswordComponent
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
export class ResetPasswordRoutingModule { }
