import { Items } from './../../mocks/providers/items';
import { Item } from './../../models/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html',
})
export class GuiaPage {
  currentItems: Item[];
  categoria: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
    this.categoria = 'Bar';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuiaPage');
  }


  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
