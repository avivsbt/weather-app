import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CorrelationIdGenerator {

    protected seed: number = 0;

    next() {
        this.seed += 1;
        return this.seed.toString();
    }
}
