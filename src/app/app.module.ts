import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeadComponent } from './head/head.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightsComponent } from './highlights/highlights.component';
import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import { GaleryComponent } from './galery/galery.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HighlightsComponent,
    NavCategoriesComponent,
    GaleryComponent,
    PaymentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
