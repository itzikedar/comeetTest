import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-loader',
  providers: [],
  styleUrls: [ './loader.scss' ],
  template: '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'
})
export class LoaderComponent {
  constructor() {
  }
}
