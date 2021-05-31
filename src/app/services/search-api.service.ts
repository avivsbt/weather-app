import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from "rxjs/operators";

@Injectable({ providedIn: 'root' })

export class SearchApiService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    public search(url: string): Observable<any> {
        //this.spinnerService.show();
        return this.httpClient.get<any>(url).pipe(
            map((result) => { return result }),
            catchError(err => {
                //this.alertService.error(err.message)
                return throwError(err);
            }),
            finalize(() => {
                //this.spinnerService.hide();
            })
        )
    }
}