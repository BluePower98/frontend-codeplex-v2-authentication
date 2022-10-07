import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { SharedComponentsModule } from '@components/shared/shared-components.module';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { NotificationsModule } from '@layout/common/notifications/notifications.module';
import { UserModule } from '@layout/common/user/user.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedComponentsModule,
    FuseNavigationModule,
    NotificationsModule,
    UserModule,
  ]
})
export class DashboardModule { }
