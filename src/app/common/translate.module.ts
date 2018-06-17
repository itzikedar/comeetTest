import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

import { en_EN } from '../../assets/translate/en_EN';

@NgModule({
    declarations: [],
    imports: [
      TranslateModule.forRoot({
      }),
    ],
    exports: [TranslateModule],
})
export class Translate {
    constructor(
        public translate: TranslateService
    ) {
      translate.use('en');
      translate.setTranslation('en', en_EN);
    }
}
