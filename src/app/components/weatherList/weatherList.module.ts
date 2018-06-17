import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from '../../common/weatherService';
import { CommunicationService } from '../../common/http.service';
import { WeatherListComponent } from './weatherList.component';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './weatherList.routes';
import { Translate } from '../../common/translate.module';
import { NgxPaginationModule } from 'ngx-pagination';


// Components
import { LocationComponent } from '../locationComponent/location.component';
import { GenderToggleComponent } from '../genderToggle/genderToggle.component';

@NgModule({
  declarations: [
    WeatherListComponent,
    LocationComponent,
    GenderToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Translate,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    BrowserAnimationsModule
  ],
  providers: [
    WeatherService,
    CommunicationService
  ],
})
export class WeatherListModule { }
