import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { NoticiasPage } from './noticias';

@NgModule({
  declarations: [
    NoticiasPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasPage),
    TranslateModule.forChild()
  ],
})
export class NoticiasPageModule {}
