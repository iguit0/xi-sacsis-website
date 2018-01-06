import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { FormsPage } from '../pages/forms/forms';
import { LayoutsPage } from '../pages/layouts/layouts';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
import { ListingPage } from '../pages/listing/listing';
import { List1Page } from '../pages/list-1/list-1';


@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('NAV') nav: Nav;

  // make WalkthroughPage the root (or first) page
  // rootPage: any = WalkthroughPage;
   rootPage: any = TabsNavigationPage;


  pages: Array<{ titulo: string, component: any, icon: string}>;
  pushPages: Array<{title: string, icon: string, component: any}>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Splashscreen.hide();
      StatusBar.styleDefault();
    });

    this.pages = [
      { titulo: 'Bem-Vindo',     component: WalkthroughPage,  icon: 'flag'},
      { titulo: 'Página Inicial',        component: ListingPage,     icon: 'home'},
      { titulo: 'Guia',         component: List1Page,    icon: 'call'},
      { titulo: 'Functionalities',         component: FunctionalitiesPage,    icon: 'call'},
      { titulo: 'Layouts',         component: LayoutsPage,    icon: 'paper'},
      { titulo: 'Settings',         component: SettingsPage,    icon: 'calendar'},
      { titulo: 'Forms',         component: FormsPage,    icon: 'calendar'}
    ];

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.nav.push(page);
  }
}
