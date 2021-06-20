import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/architecture/base.component';
import { selectCurrentWeather, selectWeatherEntityExists } from 'src/app/modules/weather/state/selectors/weather.selectors';
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
    public searchUrl: string;
    public searchEndPoint: string;

    constructor(
        private injector: Injector
    ) {
        super(injector)
        this.searchEndPoint = CONFIG.getUrl(CONFIG.endpoints.autocomplete + `?apikey=${CONFIG.APIKey.Weather}&q=`);
    }

    ngOnInit(): void {
        this.weather$ = this.select(selectCurrentWeather);
    }

    ngOnDestroy(): void {

    }

    public selectSearch(weather: LoadWeather): void {
        if (this.selectUnsubscribe(selectWeatherEntityExists, { id: weather.Key })) {
            this.dispatch(WeatherActions.setCurrentWeather, { Key: weather.Key });
        }
        else {
            this.dispatch(WeatherActions.loadWeather, { LoadWeather: { Key: weather.Key, LocalizedName: weather.LocalizedName, Country: weather.Country }, setCurrent: true });
        }
    }
}
