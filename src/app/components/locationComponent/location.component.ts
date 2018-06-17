import { Component, Input } from '@angular/core';
import { get } from 'lodash';

@Component({
  selector: 'app-loaction-component',
  templateUrl: './location.html',
  styleUrls: ['./location.scss']
})
export class LocationComponent {
  @Input() public loc: object;
  @Input() public index: Function;
  constructor() {}
  public getValue( path ) {
    return get(this.loc, path, '');
  }
}
