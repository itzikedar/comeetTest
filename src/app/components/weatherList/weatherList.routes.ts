import { Routes } from '@angular/router';
import { WeatherListComponent } from './weatherList.component';

export const ROUTES: Routes = [
  { path: '',  component: WeatherListComponent },
  { path: 'weather-list',  component: WeatherListComponent },
];
