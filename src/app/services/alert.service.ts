/*core*/
import { Injectable } from '@angular/core';
import { AlertType } from '../enums/alert.enum';
import { Alert } from '../models/alerts.model';
import { CorrelationIdGenerator } from './utils/correlation-id-generator.service.ts';
import * as actionAlerts from '../store/actions/alerts.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store';

@Injectable({ providedIn: 'root' })

export class AlertService {

    constructor(
        private correlationIdGenerator: CorrelationIdGenerator,
        private store: Store<AppState>
    ) { }

    public addAlert(data: any, type: AlertType): void {
        const alert: Alert = new Alert({ alert: data, id: this.correlationIdGenerator.next(), type });
        this.store.dispatch(actionAlerts.addAlert({ alert }));
    }

    public clearAlert(): void {
        this.store.dispatch(actionAlerts.clearAlerts());
    }
}