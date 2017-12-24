import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

// Components
import { PreloadImageComponent } from '../components/preload-image/preload-image';
import { RatingComponent } from './../components/rating/rating';
import { BackgroundImageComponent } from './../components/background-image/background-image';

// Providers
import { GuideProvider } from '../providers/guide/guide';

// Pages
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { GuidePage } from '../pages/guide/guide';
import { ForgotpasswordPage } from './../pages/forgotpassword/forgotpassword';
import { LoginPage } from './../pages/login/login';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { NewsPage } from './../pages/news/news';
import { CalendarPage } from './../pages/calendar/calendar';

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    HomePage,
    LoginPage,
    GuidePage,
    WalkthroughPage,
    ForgotpasswordPage,
    NewsPage,
    CalendarPage,

    PreloadImageComponent,
    RatingComponent,
    BackgroundImageComponent
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
    ForgotpasswordPage,
    NewsPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GuideProvider
  ]
})
export class AppModule {}
