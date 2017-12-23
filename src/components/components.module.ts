import { NgModule } from '@angular/core';
import { PreloadImageComponent } from './preload-image/preload-image';
import { RatingComponent } from './rating/rating';
import { BackgroundImageComponent } from './background-image/background-image';

@NgModule({
	declarations: [PreloadImageComponent,
    RatingComponent,
    BackgroundImageComponent],
	imports: [],
	exports: [PreloadImageComponent,
    RatingComponent,
    BackgroundImageComponent]
})
export class ComponentsModule {}
