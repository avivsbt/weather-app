import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { BaseComponent } from 'src/app/architecture/base.component';
import { Alert } from 'src/app/shared/modules/alert/models/alerts.model';
import { selectAllAlerts } from 'src/app/shared/modules/alert/state/selectors/alerts.selectors';
import * as actionAlerts from './state/actions/alerts.actions'

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent extends BaseComponent implements OnInit, OnDestroy {

    public alerts: Alert[];

    constructor(
        private injector: Injector
    ) {
        super(injector);
    }

    ngOnInit() {
        this.subscriptions.push(this.select(selectAllAlerts).subscribe((alerts: Alert[]) => {
            this.alerts = alerts;
        }));
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    public closeAlert(alert: Alert): void {
        this.alertService.closeAlert(alert);
    }
}
