import { Component, OnInit, OnDestroy, Injector, Input } from '@angular/core';
import { BaseComponent } from 'src/app/architecture/base.component';
import { Weather } from 'src/app/modules/weather/models/weather.model';
import * as WeatherActions from 'src/app/modules/weather/state/actions/weather.actions'

@Component({
    selector: 'app-favorites-item',
    templateUrl: './favorites-item.component.html',
    styleUrls: ['./favorites-item.component.scss']
})

export class FavoritesItemComponent extends BaseComponent implements OnInit, OnDestroy {

    @Input() weathers: Weather[];

    constructor(
        private injector: Injector
    ) {
        super(injector);
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    public selectCurrentWeather(key: string): void {
        this.dispatch(WeatherActions.setCurrentWeather, { Key: key });
        this.navigateTo(this.pathService.weather);
    }

}
