import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { AlertType } from 'src/app/shared/modules/alert/enums/alert.enum';
import { AlertService } from '../../shared/modules/alert/services/alert.service';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
        private alertService: AlertService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const timeoutValue = req.headers.get('timeout') || this.defaultTimeout;
        const timeoutValueNumeric = Number(timeoutValue);

        return next.handle(req).pipe(
            timeout(timeoutValueNumeric),
            tap(event => { }, (error: any) => {
                this.alertService.addAlert(error, AlertType.Error);
            }),
            catchError((response: HttpErrorResponse) => {
                return of(response.error);
            })
        );
    }

}