import { Injectable } from '@angular/core';
import { AlertType } from '../enums/alert.enum';
import { Alert, DataAlert } from '../models/alerts.model';
import * as actionAlerts from '../state/actions/alerts.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store';
import { Update } from '@ngrx/entity';

@Injectable({ providedIn: 'root' })

export class AlertService {

    protected id: number;

    constructor(
        private store: Store<AppState>
    ) {
        this.id = 0;
    }

    private alertId() {
        this.id += 1;
        return this.id.toString();
    }

    public addAlert(data: any, type: AlertType): void {

        if (typeof data === 'string') {
            let alertObj: DataAlert = { message: data };
            data = alertObj;
        }

        const alert: Alert = new Alert({ data, id: this.alertId(), type });
        this.store.dispatch(actionAlerts.addAlert({ alert }));
        this.timerCloseAlert(alert);
    }

    public clearAlert(): void {
        this.store.dispatch(actionAlerts.clearAlerts());
    }

    public closeAlert(alert: Alert): void {
        const alertObj: Alert = { ...alert };
        alertObj.read = true;
        this.updateAlert(alertObj);
    }

    private updateAlert(alert: Alert): void {
        const update: Update<Alert> = {
            id: alert.id,
            changes: { ...alert }
        };
        this.store.dispatch(actionAlerts.updateAlert({ update }));
    }

    private timerCloseAlert(alert: Alert): void {
        setTimeout(() => {
            this.closeAlert(alert);
        }, 2000);
    }
}