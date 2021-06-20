import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/architecture/base.component';
import { Alert } from 'src/app/models/alerts.model';
import { selectAllAlerts } from 'src/app/store/selectors/alerts.selectors';

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

}
