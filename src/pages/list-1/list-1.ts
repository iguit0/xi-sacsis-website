import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { List1Model } from './list-1.model';
import { List1Service } from './list-1.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'list-1-page',
  templateUrl: 'list-1.html'
})
export class List1Page {
  list1: List1Model = new List1Model();
  loading: any;
  ratingForm: FormGroup;

  constructor(
    public nav: NavController,
    public list1Service: List1Service,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
    this.ratingForm = new FormGroup({
      rate: new FormControl(1.5),
      rate2: new FormControl(4.5)
    });
  }

  ionViewDidLoad() {
    this.loading.present();
    this.list1Service
      .getData()
      .then(data => {
        this.list1.items = data.items;
        this.loading.dismiss();
      });
  }
  
  itemTapped(event, item) {
    this.nav.push(item.component);
  }

}