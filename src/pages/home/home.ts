import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { GuidePage } from '../guide/guide';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private restProvider: HomeProvider
    )
    {
      this.loading = this.loadingCtrl.create({
        content: "Carregando...",
        duration: 3000
      });
    }
 

  goToFeed(category: any) {
    this.navCtrl.setRoot(GuidePage, { category: category });
  }


}
