import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

import { PreloadImageComponent } from '../components/preload-image/preload-image';

import { MyApp } from './app.component';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { GuidePage } from '../pages/guide/guide';
import { GuideProvider } from '../providers/guide/guide';
import { ForgotpasswordPage } from './../pages/forgotpassword/forgotpassword';
import { LoginPage } from './../pages/login/login';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    HomePage,
    LoginPage,
    GuidePage,
    WalkthroughPage,
    ForgotpasswordPage,

    PreloadImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    LoginPage,
    HomePage,
    GuidePage,
    WalkthroughPage,
    ForgotpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GuideProvider
  ]
})
export class AppModule {}
