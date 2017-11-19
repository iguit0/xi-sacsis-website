import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { GuiaPage } from './guia';

@NgModule({
  declarations: [
    GuiaPage,
  ],
  imports: [
    IonicPageModule.forChild(GuiaPage),
    TranslateModule.forChild()
  ],
  exports: [
    GuiaPage
  ]
})
export class GuiaPageModule {}
