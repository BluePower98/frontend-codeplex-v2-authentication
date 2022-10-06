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
        path:'',
        loadChildren:():any => import('./../analytics/analytics.module').then(m=>m.AnalyticsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
