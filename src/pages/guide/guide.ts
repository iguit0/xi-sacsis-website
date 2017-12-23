import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GuideProvider } from '../../providers/guide/guide';

@IonicPage()
@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {
    countries: string[];
    errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public guideprovider: GuideProvider) {
  }
  
  getCountries() {
    this.guideprovider.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

  ionViewDidLoad() {
    this.getCountries();
  }




}

