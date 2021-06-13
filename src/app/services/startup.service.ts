import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enums/local-storage.enum';
import { Unit } from '../enums/temperature-unit.enum';
import { StorageService } from './local-storage.service';
import { ResetService } from './reset.service';


@Injectable({ providedIn: 'root' })

export class StartUpService {

    constructor(
        private resetService: ResetService,
        private storageService: StorageService
    ) { }

    public load(): Promise<boolean> {
        return Promise.all([
            this.resetService.setFavorites(),
            this.resetService.setTemperatureUnit(this.storageService.get<Unit>(LocalStorageKey.temperatureUnit)),
            this.resetService.setLocation()
        ]).then(results => {
            if (results.every(v => v === true)) { 
                this.resetService.setWeatherByLocation(); //TODO: Create promise success
                return true
            }
            throw new Error("The app has not been initialized");
        });
    }


}