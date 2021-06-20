/*core*/
import { Injectable, Injector } from '@angular/core';
import { BaseComponent } from '../architecture/base.component';

/*store*/
import * as actionSettings from '../store/actions/settings.actions';
import * as FavoritesActions from 'src/app/modules/favorites/state/actions/favorites.actions'
import * as actionWeather from 'src/app/modules/weather/state/actions/weather.actions';
import { selectLocation } from 'src/app/store/selectors/settings.selectors';

/*enum*/
import { LocalStorageKey, LocalStorageTime } from '../enums/local-storage.enum';
import { Unit } from '../enums/temperature-unit.enum';

/*model*/
import { currentLocation } from '../models/current-location.model';

/*plugins*/
import * as Moment from 'moment';
import { CONFIG } from '../shared/config';


@Injectable({ providedIn: 'root' })

export class ResetService extends BaseComponent {

    constructor(
        private injector: Injector
    ) {
        super(injector)
    }

    public setFavorites(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (this.LocalStorageKeyFavorites) {
                this.dispatch(FavoritesActions.setFavorites, { favorite: this.LocalStorageKeyFavorites });
            }
            resolve(true);
        });
    }

    public setTemperatureUnit(temperatureUnit: Unit): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.LocalStorageKeyTemperatureUnit) {
                temperatureUnit = Unit.Celsius;
            }
            this.storageService.set(LocalStorageKey.temperatureUnit, temperatureUnit, Moment().add(30, LocalStorageTime.Days).toDate());
            this.dispatch(actionSettings.setTemperatureUnit, { temperatureUnit })
            resolve(true);
        });
    }

    public setLocation(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.dispatch(actionSettings.setCurrentLocation, {
                    currentLocation: new currentLocation({ latitude: pos.coords.latitude.toString(), longitude: pos.coords.longitude.toString() })
                });
                resolve(true);
            }, () => {
                this.dispatch(actionSettings.setCurrentLocation, {
                    currentLocation: CONFIG.defaultLocation
                });
                resolve(true);
            });
        });
    }

    public setWeatherByLocation(setCurrent: boolean = true): void {
        this.dispatch(actionWeather.loadWeatherByLocation, { currentLocation: this.selectUnsubscribe(selectLocation), setCurrent });
    }
}