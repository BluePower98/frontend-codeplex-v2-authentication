import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ModuleComponent } from './module.component';

const routes: Routes = [
  {
    path:'',
    component:ModuleComponent,
    children:[
      {
        path:'home',
        component:AnalyticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
