import { IonRating } from './../../components/ion-rating/ion-rating';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailPage } from './item-detail';

@NgModule({
  declarations: [
    ItemDetailPage,
    IonRating
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
