import { Injectable } from '@angular/core';
import { Path } from 'src/app/enums/path.enum'

@Injectable({ providedIn: 'root' })

export class PathService {

    public favorites = Path.Favorites;
    public weather = Path.Weather;

    constructor() { }
}