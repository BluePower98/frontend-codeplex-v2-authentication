import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from '@layout/layout.component';
import { PricingResolver } from './pages/pricing/pricing.resolver';
import { OnDemandPreloadStrategy } from '@fuse/services/preloading-strategies/on-demand-preload-strategy.service';
import { DASHBOARD_ROUTES } from './pages/dashboard/dashboard.routes';

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

  // Auth routes for guests
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
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
        path: 'login',
        loadChildren: (): any => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'pricing',
        loadChildren: (): any => import('./pages/pricing/pricing.module').then(m => m.PricingModule),
        resolve: {
          pricing: PricingResolver
        }
      },
      {
        path: 'valid-access',
        loadChildren: (): any => import('./pages/valid-access/valid-access.module').then(m => m.ValidAccessModule)
      },
      {
        path: 'select-modules',
        loadChildren: (): any => import('./pages/select-module/select-module.module').then(m => m.SelectModuleModule)
        // loadChildren: (): any => import('./pages/pricing/pricing.module').then(m => m.PricingModule),

      },
    ],

  },
  
  {
    path: 'select-module',
    component: LayoutComponent,
    // resolve: {
    //   initialData: DashboardDataResolver,
    // },
    canActivateChild: [AuthGuard],
    children: DASHBOARD_ROUTES
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
