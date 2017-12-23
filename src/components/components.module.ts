import { NgModule } from '@angular/core';
import { PreloadImageComponent } from './preload-image/preload-image';
import { RatingComponent } from './rating/rating';

@NgModule({
	declarations: [PreloadImageComponent,
    RatingComponent],
	imports: [],
	exports: [PreloadImageComponent,
    RatingComponent]
})
export class ComponentsModule {}
