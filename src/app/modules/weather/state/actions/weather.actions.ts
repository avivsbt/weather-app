import { createAction, props } from '@ngrx/store';
import { currentLocation } from 'src/app/models/current-location.model';
import { LoadWeather, Weather } from 'src/app/modules/weather/models/weather.model';

export const loadWeatherByLocation = createAction('[Weather] Load weather by location', props<{ currentLocation: currentLocation, setCurrent: boolean }>());

export const loadWeather = createAction('[Weather] Load weather', props<{ LoadWeather: LoadWeather, setCurrent: boolean }>());

export const loadWeatherSuccess = createAction('[Weather] Load weather success', props<{ weather: Weather }>());

export const setCurrentWeather = createAction('[Weather] Set current weather', props<{ Key: string }>());