import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';

import { SharedComponentsModule } from '@components/shared/shared-components.module';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { NotificationsModule } from '@layout/common/notifications/notifications.module';
import { UserModule } from '@layout/common/user/user.module';
// import { UserModule } from '../../../layout/common/user/user.module';


@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    SharedComponentsModule,
    FuseNavigationModule,
    NotificationsModule,
    UserModule
  ]
})
export class ModuleModule { }
