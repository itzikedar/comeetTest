import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../common/weatherService';
import { set } from 'lodash';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weatherList.html',
  styleUrls: ['./weatherList.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('2s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class WeatherListComponent implements OnInit {
  public locationsList: Array<object>;
  public itemsOnPage: Number = 10;
  public p: Number = 1;
  constructor(
    private weatherService: WeatherService
  ) {}
  public ngOnInit() {
    this.weatherService.getAllWorldWeather( 'MALE').then( (res: Array<object>) => this.locationsList = res );
  }
  public changeGender(gender) {
    this.locationsList = this.weatherService.filterData(this.locationsList, gender);
  }
}
