import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/architecture/base.component';
import { Unit } from 'src/app/enums/temperature-unit.enum';
import { selectCurrentWeather, selectWeatherEntityExists } from 'src/app/modules/weather/state/selectors/weather.selectors';
import { ResetService } from 'src/app/services/reset.service';
import { CONFIG } from 'src/app/shared/config';
import { selectTemperatureUnit } from 'src/app/store/selectors/settings.selectors';
import { LoadWeather, Weather } from './models/weather.model';
import * as WeatherActions from './state/actions/weather.actions'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export class WeatherComponent extends BaseComponent implements OnInit {

    public weather$: Observable<Weather>;
    public temperatureUnit$: Observable<Unit>;
    public searchUrl: string;
    public searchEndPoint: string;

    constructor(
        private injector: Injector,
        private resetService: ResetService
    ) {
        super(injector)
        this.searchEndPoint = CONFIG.getUrl(CONFIG.endpoints.autocomplete + `?apikey=${CONFIG.APIKey.Weather}&q=`);
    }

    ngOnInit(): void {
        this.temperatureUnit$ = this.select(selectTemperatureUnit);
        this.weather$ = this.select(selectCurrentWeather);
    }

    public selectSearch(weather: LoadWeather): void {
        if (this.selectUnsubscribe(selectWeatherEntityExists, { id: weather.Key })) {
            this.dispatch(WeatherActions.setCurrentWeather, { Key: weather.Key });
        }
        else {
            this.dispatch(WeatherActions.loadWeather, { LoadWeather: { Key: weather.Key, LocalizedName: weather.LocalizedName, Country: weather.Country }, setCurrent: true });
        }
    }

    public toggleUnit(value: string): void {
        let unit = this.getTemperatureUnit.Celsius === value ? Unit.Fahrenheit : Unit.Celsius;
        this.resetService.setTemperatureUnit(unit);
    }

    public toggleLocation(): void {
        this.resetService.setWeatherByLocation();
    }
}
