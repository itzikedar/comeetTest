import { Component } from '@angular/core';
import { LoaderService } from './common/loader/loader.service';
import { set } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showLoader = false;
  constructor(
    private loaderService: LoaderService
  ) {
    this.watchLoader();
  }
  private watchLoader() {
    this.loaderService.loaderObserv.subscribe( (status: boolean) => {
      setTimeout(() => {
        set(this, 'showLoader' , status);
      }, 0);
    });
  }
}
