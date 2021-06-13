/*core*/
import { Component, OnInit, OnDestroy, Injector } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AppState } from '../store';
import { select, Store } from '@ngrx/store';

/*services*/
import { StorageService } from "../services/local-storage.service";
import { FortawesomeService } from "../services/fortawesome.service.ts";

/*enums*/
import { Unit } from "../enums/temperature-unit.enum";
import { LocalStorageKey } from "../enums/local-storage.enum";
import { Favorite } from "../modules/favorites/models/favorite.model";

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
        this.unsubscribe();
    }

    /*global function*/
    public get getTemperatureUnit(): typeof Unit {
        return Unit;
    }

    public get LocalStorageKeyTemperatureUnit(): Unit {
        return this.storageService.get<Unit>(LocalStorageKey.temperatureUnit)
    }

    public get LocalStorageKeyFavorites(): Favorite[] {
        return this.storageService.get<Favorite[]>(LocalStorageKey.favorites)
    }

    public unsubscribe(): void {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
        this.subscriptions = [];
    }

    /*cover function*/
    public dispatch(action: any, data: any): void {
        this.store.dispatch(action(data));
    }

    public select(selectName: any, value?: any) {
        return this.store.pipe(select(selectName, value));
    }

    public selectUnsubscribe(selectName: any, value?: any) {
        let state: any;
        this.select(selectName, value).subscribe(result => state = result).unsubscribe();
        return state;
    }
}