import { Component, OnInit, OnDestroy, Input, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/architecture/base.component';
import { Unit } from 'src/app/enums/temperature-unit.enum';
import { ResetService } from 'src/app/services/reset.service';
import { selectTemperatureUnit } from 'src/app/store/selectors/settings.selectors';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-side-buttons',
  templateUrl: './weather-side-buttons.component.html',
  styleUrls: ['./weather-side-buttons.components.scss']
})

export class WeatherSideButtonsComponent extends BaseComponent implements OnInit, OnDestroy {

  @Input() weather: Weather;
  public temperatureUnit$: Observable<Unit>;

  constructor(
    private injector: Injector,
    private resetService: ResetService
  ) {
    super(injector);
    this.temperatureUnit$ = this.select(selectTemperatureUnit);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }  

  toggleLocation(): void {
    this.resetService.setWeatherByLocation();
  }

  toggleUnit(value: Unit): void {
    let unit = this.getTemperatureUnit.Celsius === value ? Unit.Fahrenheit : Unit.Celsius;
    this.resetService.setTemperatureUnit(unit);
  }

}
