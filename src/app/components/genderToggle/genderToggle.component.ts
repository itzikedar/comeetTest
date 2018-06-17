import { Component, Input } from '@angular/core';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-gender-toggle',
  templateUrl: './genderToggle.html',
  styleUrls: ['./genderToggle.scss']
})
export class GenderToggleComponent {
  private genderArray: Array<string> = ['MALE', 'FEMALE'];
  @Input() public changeGender: Function;
  private genderEnum = 0;
  constructor() {}
  public toggleGender() {
    this.genderEnum = this.genderEnum === 0 ? 1 : 0;
    this.changeGender(this.genderArray[ this.genderEnum ]);
  }
}
