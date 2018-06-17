import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicationService } from './http.service';
import { WEATHER_TYPES } from './openweather.types.consts';
import { WEARHER_FILTER_CONSTS } from './weatherFilter.consts';
import { LoaderService } from '../common/loader/loader.service';

import { API } from './API.consts';
import { get, filter, map, chain, forEach, sortBy } from 'lodash';

@Injectable()
export class WeatherService {
  filterConsts: object = WEARHER_FILTER_CONSTS;
  constructor(
    private communicationService: CommunicationService,
    private loaderService: LoaderService
  ) {
  }
  public getAllWorldWeather( gender: String ) {
    this.loaderService.setLoaderStatus(true);
    return new Promise((resolve, reject) => {
      const typeData = get(WEATHER_TYPES, 'allWorld');
      this.communicationService.getHttp(API.weatherByCords(typeData))
        .subscribe( (response: any) => {
            this.loaderService.setLoaderStatus(false);
            resolve(this.filterData( response.list, gender ));
        });
    });
  }
  public filterData( data, gender ) {
    const filter_params = get( this.filterConsts, gender );
    return chain(data)
      .forEach( loc => loc.score = this.getDistance(loc, filter_params))
      .sortBy( loc => loc.score )
      .value();
  }
  private getDistance(x, y) {
    return Math.abs( get(x, 'main.temp', 0) - get(y, 'temp', 0)) +
      Math.abs( get(x, 'main.humidity', 0) - get(y, 'humidity', 0));
  }
}
