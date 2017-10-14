import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WeatherPage } from '../pages/weather/weather';
import { SettingsPage } from '../pages/settings/settings';
import {HttpModule} from '@angular/http'
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherDataProvider } from '../providers/weather-data/weather-data';

@NgModule({
  declarations: [
    MyApp,
    WeatherPage,
    SettingsPage,
    NewsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WeatherPage,
    SettingsPage,
    NewsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherDataProvider
  ]
})
export class AppModule {}
