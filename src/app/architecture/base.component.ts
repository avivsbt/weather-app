/*core*/
import { Component, OnInit, OnDestroy, Injector } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AppState } from '../store';
import { select, Store } from '@ngrx/store';

/*plugins*/
import * as Moment from 'moment';

/*models*/
import { currentLocation } from 'src/app/models/current-location.model';

/*store*/
import * as actionSettings from '../store/actions/settings.actions';

/*services*/
import { StorageService } from "../services/local-storage.service";
import { FortawesomeService } from "../services/fortawesome.service.ts";

/*enums*/
import { Unit } from "../enums/temperature-unit.enum";
import { LocalStorageKey, LocalStorageTime } from "../enums/local-storage.enum";

@Component({
    template: ``
})

export class BaseComponent implements OnInit, OnDestroy {

    public subscriptions: Subscription[];
    public store: Store<AppState>;
    public activatedRoute: ActivatedRoute;
    public router: Router;
    public storageService: StorageService;
    public fortawesomeService: FortawesomeService;

    constructor(private injectorObj: Injector) {
        this.subscriptions = [];
        this.store = <Store<AppState>>this.injectorObj.get(Store);
        this.activatedRoute = this.injectorObj.get(ActivatedRoute);
        this.router = this.injectorObj.get(Router);
        this.storageService = this.injectorObj.get(StorageService);
        this.fortawesomeService = this.injectorObj.get(FortawesomeService);
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
        this.subscriptions = [];
    }

    public dispatch(action: any, data: any): void {
        this.store.dispatch(action(data));
    }

    public select(selectName: any, value?: any) {
        return this.store.pipe(select(selectName, value));
    }

    public setLocation(): void {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.dispatch(actionSettings.setCurrentLocation, {
                currentLocation: new currentLocation({ latitude: pos.coords.latitude.toString(), longitude: pos.coords.longitude.toString() })
            });

        }, () => {
            this.dispatch(actionSettings.setCurrentLocation, {
                currentLocation: new currentLocation({ latitude: "32.106086399999995", longitude: "34.829107199999996 " })
            });
        });
    }

    public setTemperatureUnit(temperatureUnit: Unit): void {
        if (!this.storageService.get<Unit>(LocalStorageKey.temperatureUnit)) {
            temperatureUnit = Unit.Celsius;
        }
        this.storageService.set(LocalStorageKey.temperatureUnit, temperatureUnit, Moment().add(30, LocalStorageTime.Days).toDate());
        this.dispatch(actionSettings.setTemperatureUnit, { temperatureUnit })
    }

    public get getTemperatureUnit(): typeof Unit {
        return Unit;
    }

}