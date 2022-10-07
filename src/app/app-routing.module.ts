import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from '@layout/layout.component';
import { PricingResolver } from './pages/pricing/pricing.resolver';
import { OnDemandPreloadStrategy } from '@fuse/services/preloading-strategies/on-demand-preload-strategy.service';
import { DashboardDataResolver } from './pages/dashboard/dashboard-data.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'select-module'
  },
  {
    path: '',
    component: LayoutComponent,
    // data: {
    //  layout: 'empty'
    // }, 
    children: [
      {
        path: 'confirmation-required',
        loadChildren: (): any => import('./pages/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)
      },
      {
        path: 'forgot-password',
        loadChildren: (): any => import('./pages/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)
      },
      {
        path: 'reset-password',
        loadChildren: (): any => import('./pages/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)
      },
      {
        path: 'pricing',
        loadChildren: (): any => import('./pages/pricing/pricing.module').then(m => m.PricingModule),
        resolve: {
          pricing: PricingResolver
        }
      },
      {
        path: 'login',
        loadChildren: (): any => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'valid-access',
        loadChildren: (): any => import('./pages/valid-access/valid-access.module').then(m => m.ValidAccessModule)
      },
      {
        path: 'select-module',
        component: LayoutComponent,
        resolve: {
          DashboardData: DashboardDataResolver,
        },
        canLoad: [AuthGuard],
        loadChildren:():any =>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: OnDemandPreloadStrategy,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
