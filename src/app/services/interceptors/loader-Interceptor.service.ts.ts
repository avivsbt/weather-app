import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectSpinner } from 'src/app/store/selectors/settings.selectors';
import * as actionSettings from '../../store/actions/settings.actions';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    private spinner: boolean;

    constructor(
        private store: Store
    ) {

        this.store.pipe(select(selectSpinner)).subscribe(spinner => {
            this.spinner = spinner;
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        Promise.resolve(null).then(() => {
            if (!this.spinner) {
                this.store.dispatch(actionSettings.handleSpinner({ spinner: true }))
            }
        });
        return next.handle(req).pipe(
            finalize(() =>
                setTimeout(() => {
                    if (this.spinner) {
                        this.store.dispatch(actionSettings.handleSpinner({ spinner: false }));
                    }
                }, 1000)

            )
        );
    }
}