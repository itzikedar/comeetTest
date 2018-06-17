import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class LoaderService {
  public loaderObserv = new ReplaySubject(1);
  private loaderStatus: boolean;
  constructor() {
  }
  public setLoaderStatus(status: boolean) {
    if (status !== this.loaderStatus) {
      this.loaderObserv.next(status);
      this.loaderStatus = status;
    }
  }
}
