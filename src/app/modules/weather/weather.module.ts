import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { WeatherDailyForecastComponent } from './components/weather-daily-forecast/weather-daily-forecast.component';
import { WeatherSideButtonsComponent } from './components/weather-side-buttons/weather-side-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule.forRoot(),
  ],
  exports: [
    WeatherComponent,
    WeatherDailyForecastComponent,
    WeatherSideButtonsComponent
  ],
  declarations: [
    WeatherComponent,
    WeatherDailyForecastComponent,
    WeatherSideButtonsComponent
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class WeatherModule { }
