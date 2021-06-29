import { Component, Injector, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/architecture/base.component';
import { Unit } from 'src/app/enums/temperature-unit.enum';
import { selectTemperatureUnit } from 'src/app/store/selectors/settings.selectors';
import { Temperature } from '../../../modules/weather/models/current-conditions.model';

@Component({
    selector: 'app-weather-temperature',
    templateUrl: './weather-temperature.component.html',
    styleUrls: ['./weather-temperature.component.scss']
})

export class WeatherTemperatureComponent extends BaseComponent {

    public temperatureUnit$: Observable<Unit>;
    @Input() temperature: Temperature;

    constructor(private injector: Injector) {
        super(injector)
        this.temperatureUnit$ = this.select(selectTemperatureUnit);
    }

}
