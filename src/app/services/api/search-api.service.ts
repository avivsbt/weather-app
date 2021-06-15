import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })

export class SearchApiService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    public search(url: string): Observable<any> {
        return this.httpClient.get<any>(url).pipe(map((result) => { return result }))
    }
}