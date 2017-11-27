import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  categories = [
    {
      imageUrl: 'assets/imgs/home/guia.jpg',
      title: 'Guia',
      subtitle: '41 Listings'
    },
    {
      imageUrl: 'assets/imgs/home/agenda.jpg',
      title: 'Agenda',
      subtitle: '64 Listings'
    },
    {
      imageUrl: 'assets/imgs/home/eventos.jpg',
      title: 'Eventos',
      subtitle: '72 Listings'
    },
    {
      imageUrl: 'assets/imgs/home/delivery.jpg',
      title: 'Delivery',
      subtitle: '28 Listings'
    }];
    }
