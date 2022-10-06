import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        loadChildren:():any=>import('./module/module.module').then(m=>m.ModuleModule)
        // children:
    }
    // {
    //     path:'home',
    //     loadChildren:():any=>import('./analytics/analytics.module').then(m=>m.AnalyticsModule)
    // }
];