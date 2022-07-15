import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UnlockSessionComponent } from './unlock-session.component';

const routes: Route[] = [
  {
      path: '',
      component: UnlockSessionComponent
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
export class UnlockSessionRoutingModule { }
