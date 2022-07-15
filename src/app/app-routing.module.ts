import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from '@layout/layout.component';
import { OnDemandPreloadStrategy } from './services/preloading-strategies/on-demand-preload-strategy.service';
import { PricingResolver } from './pages/pricing/pricing.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
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
        path: 'sign-in',
        loadChildren: (): any => import('./pages/sign-in/sign-in.module').then(m => m.AuthSignInModule)
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
        path: 'select-module',
        canActivateChild: [AuthGuard],
        loadChildren: (): any => import('./pages/select-module/select-module.module').then(m => m.SelectModuleModule)
      },
    ]
  },
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
