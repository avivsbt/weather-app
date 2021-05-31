import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from './architecture/base.component';
import { selectLocation } from 'src/app/store/selectors/settings.selectors';
import * as actionWeather from 'src/app/modules/weather/state/actions/weather.actions';
import { Unit } from './enums/temperature-unit.enum';
import { LocalStorageKey } from './enums/local-storage.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(
    private injector: Injector
  ) {
    super(injector)
    this.setLocation();
    this.setTemperatureUnit(this.storageService.get<Unit>(LocalStorageKey.temperatureUnit));
  }

  ngOnInit(): void {
    this.subscriptions.push(this.select(selectLocation).subscribe(currentLocation => {
      if (currentLocation) {
        this.dispatch(actionWeather.loadWeatherByLocation, { currentLocation });
      }
    }));
  }

  ngOnDestroy(): void {

  }

}
