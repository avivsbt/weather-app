import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WeatherActions from '../actions/weather.actions';
import { mergeMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { WeatherApiService } from 'src/app/modules/weather/services/weather-api.service.ts';

@Injectable()
export class WeatherEffects {

    loadWeatherByLocation$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WeatherActions.loadWeatherByLocation),
            mergeMap((action) =>
                this.weatherApiService.getGeoposition(action.currentLocation).pipe(
                    map((geoposition) =>
                        WeatherActions.loadWeather({
                            LoadWeather: {
                                Key: geoposition.Key,
                                LocalizedName: geoposition.LocalizedName,
                                Country: geoposition.Country.EnglishName
                            },
                            setCurrent: action.setCurrent
                        })
                    )
                )
            )
        );
    });

    loadWeather$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WeatherActions.loadWeather),
            mergeMap((action) =>
                forkJoin([
                    this.weatherApiService.getCurrentConditions(action.LoadWeather.Key),
                    this.weatherApiService.getForecasts(action.LoadWeather.Key),
                ]).pipe(
                    mergeMap((result) => {
                        let setCurrentWeather = WeatherActions.setCurrentWeather({ Key: action.LoadWeather.Key });
                        let loadWeatherSuccess = WeatherActions.loadWeatherSuccess({
                            weather: {
                                Key: action.LoadWeather.Key,
                                Name: action.LoadWeather.LocalizedName,
                                Country: action.LoadWeather.Country,
                                DateTime: result[0][0].LocalObservationDateTime,
                                Temperature: result[0][0].Temperature,
                                WeatherIcon: result[0][0].WeatherIcon,
                                WeatherText: result[0][0].WeatherText,
                                DailyForecasts: result[1].DailyForecasts
                            }
                        })
                        return action.setCurrent ? [loadWeatherSuccess, setCurrentWeather] : [loadWeatherSuccess];
                    })
                ))
        );
    });

    constructor(
        private actions$: Actions,
        private weatherApiService: WeatherApiService
    ) { }
}