import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { List1Service } from '../list-1/list-1.service';
import { List1Model } from '../list-1/list-1.model';
@Component({
  selector: 'page-list1-details',
  templateUrl: 'list1-details.html'
})
export class List1DetailsPagePage {
  loading: any;
  list1: List1Model = new List1Model();

  constructor(public nav: NavController,public list1Service: List1Service,
    public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create(); }

  ionViewDidLoad() {
    this.loading.present();
    this.list1Service
      .getData()
      .then(data => {
        this.list1.items = data.items;
        this.loading.dismiss();
      });
  }

}
