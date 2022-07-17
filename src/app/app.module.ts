import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@layout/layout.module';
import { CoreModule } from '@core/core.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LayoutModule,
        HttpClientModule,
        
        // Core module of your application
        CoreModule,

        ToastrModule.forRoot(),
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {
}
