import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as actionSettings from '../../store/actions/settings.actions';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(
        private store: Store
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        Promise.resolve(null).then(() => this.store.dispatch(actionSettings.handleSpinner({ spinner: true }))); //TODO: check if spinner is exists

        return next.handle(req).pipe(
            finalize(() => this.store.dispatch(actionSettings.handleSpinner({ spinner: false })))
        );
    }
}