import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CONFIG } from 'src/app/shared/config'
import { Observable } from 'rxjs';
import { CurrentConditions } from '../models/current-conditions.model';
import { Forecasts } from '../models/forecasts.model';
import { Geoposition } from '../models/geoposition.model';
import { currentLocation } from 'src/app/models/current-location.model';

@Injectable({ providedIn: 'root' })

export class WeatherApiService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    getCurrentConditions(key: string): Observable<CurrentConditions[]> {
        return this.httpClient.get<CurrentConditions[]>(CONFIG.getUrl(CONFIG.endpoints.currentConditions + `${key}?apikey=${CONFIG.APIKey.Weather}`));
    }

    getForecasts(key: string): Observable<Forecasts> {
        return this.httpClient.get<Forecasts>(CONFIG.getUrl(CONFIG.endpoints.forecasts + `${key}?apikey=${CONFIG.APIKey.Weather}`));
    }

    getGeoposition(location: currentLocation): Observable<Geoposition> {
        return this.httpClient.get<Geoposition>(CONFIG.getUrl(CONFIG.endpoints.geoposition + `?apikey=${CONFIG.APIKey.Weather}&q=${location.latitude},${location.longitude}`));
    }
}