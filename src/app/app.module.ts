import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InvoiceListPage } from '../pages/invoice-list/invoice-list';
import { InvoiceDetailPage } from '../pages/invoice-detail/invoice-detail';
import { InvoiceApiProvider } from '../providers/invoice-api/invoice-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InvoiceListPage,
    InvoiceDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InvoiceListPage,
    InvoiceDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InvoiceApiProvider
  ]
})
export class AppModule {}
