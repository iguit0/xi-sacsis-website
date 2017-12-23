import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GuideProvider } from '../../providers/guide/guide';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {
    ratingForm: FormGroup;
    countries: string[];
    errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public guideprovider: GuideProvider) {
    this.ratingForm = new FormGroup({
      rate: new FormControl(2.5),
      rate2: new FormControl(1.5)
    });
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