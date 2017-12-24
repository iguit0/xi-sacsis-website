import { Component,ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { GuidePage } from '../pages/guide/guide';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from './../pages/signup/signup';
import { HomePage } from './../pages/home/home';
import { NewsPage } from './../pages/news/news';
import { CalendarPage } from './../pages/calendar/calendar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string}>;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menu: MenuController,
    public app: App
  ) {
    this.rootPage = HomePage;
    this.pages = [
      { titulo: 'Bem-Vindo',     component: WalkthroughPage,  icon: 'flag'},
      { titulo: 'Página Inicial',        component: HomePage,     icon: 'home'},
      { titulo: 'Guia',         component: GuidePage,    icon: 'call'},
      { titulo: 'Notícias',         component: NewsPage,    icon: 'paper'},
      { titulo: 'Agenda',         component: CalendarPage,    icon: 'calendar'}
    ];
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}