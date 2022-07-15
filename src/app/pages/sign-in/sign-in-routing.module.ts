import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthSignInComponent } from './sign-in.component';

const routes: Route[] = [
  {
      path: '',
      component: AuthSignInComponent
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
export class SignInRoutingModule { }
