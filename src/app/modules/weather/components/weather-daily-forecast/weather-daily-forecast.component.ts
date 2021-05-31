import { Component, OnInit, Input } from '@angular/core';
import { DailyForecasts } from '../../models/forecasts.model';

@Component({
  selector: 'app-weather-daily-forecast',
  templateUrl: './weather-daily-forecast.component.html',
  styleUrls: ['./weather-daily-forecast.component.scss']
})

export class WeatherDailyForecastComponent implements OnInit {

  @Input() forecast: DailyForecasts[];


  constructor() { }

  ngOnInit(): void {

  }

}
