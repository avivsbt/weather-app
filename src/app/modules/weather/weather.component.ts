import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseComponent } from 'src/app/architecture/base.component';
import { entityExists, selectCurrentWeather } from 'src/app/modules/weather/state/selectors/weather.selectors';
import { CONFIG } from 'src/app/shared/config';
import { LoadWeather, Weather } from './models/weather.model';
import * as WeatherActions from './state/actions/weather.actions'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export class WeatherComponent extends BaseComponent implements OnInit, OnDestroy {

    public weather$: Observable<Weather>;
    public weatherExists$: Observable<boolean>;

    public searchUrl: string;
    public searchEndPoint: string;

    constructor(
        private injector: Injector
    ) {
        super(injector)
        this.searchEndPoint = CONFIG.getUrl(CONFIG.endpoints.autocomplete + `?apikey=${CONFIG.APIKey.Weather}&q=`);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.weather$ = this.select(selectCurrentWeather);
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    public selectSearch(weather: LoadWeather): void {
        this.subscriptions.push(this.select(entityExists, { id: weather.Key }).subscribe(isWeatherInStore => {
            if (isWeatherInStore) {
             //this.dispatch(WeatherActions.setCurrentWeather, { Key: weather.Key });
            } else {
                
            }
            console.log(isWeatherInStore)
        }));
        this.dispatch(WeatherActions.loadWeather, { LoadWeather: { Key: weather.Key, LocalizedName: weather.LocalizedName, Country: weather.Country } });
    }
}
