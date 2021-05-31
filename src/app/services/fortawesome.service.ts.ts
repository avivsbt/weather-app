import { Injectable } from '@angular/core';

/*fortawesome*/
import { faPlus, faMinus, faTimes, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Injectable({ providedIn: 'root' })

export class FortawesomeService {

    public faTimes = faTimes;
    public faLocationArrow = faLocationArrow;
    public faPlus = faPlus;
    public faMinus = faMinus;

    constructor() { }
}