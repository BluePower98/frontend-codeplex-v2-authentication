import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
