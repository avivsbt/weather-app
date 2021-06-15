import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enums/local-storage.enum';
import { Unit } from '../enums/temperature-unit.enum';
import { StorageService } from './local-storage.service';
import { ResetService } from './reset.service';
import { AlertType } from '../enums/alert.enum';
import { AlertService } from './alert.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })

export class StartUpService {

    constructor(
        private resetService: ResetService,
        private storageService: StorageService,
        private alertService: AlertService,
        private translateService : TranslateService
    ) { }

    public load(): Promise<boolean> {
        return Promise.all([
            this.resetService.setFavorites(),
            this.resetService.setTemperatureUnit(this.storageService.get<Unit>(LocalStorageKey.temperatureUnit)),
            this.resetService.setLocation()
        ]).then(results => {

            if (results.every(v => v === true)) {
                this.resetService.setWeatherByLocation();
                return true
            }
            
            this.alertService.addAlert(this.translateService.instant('startup_not-been-initialized'), AlertType.Error);
            throw new Error(this.translateService.instant('startup_not-been-initialized'));
        });
    }


}