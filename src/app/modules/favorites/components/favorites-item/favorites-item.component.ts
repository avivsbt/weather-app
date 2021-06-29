import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from 'src/app/modules/weather/models/weather.model';

@Component({
    selector: 'app-favorites-item',
    templateUrl: './favorites-item.component.html',
    styleUrls: ['./favorites-item.component.scss']
})

export class FavoritesItemComponent implements OnInit {

    @Input() weathers: Weather[];
    @Output() selectCurrentWeather: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void { }

    public onSelectCurrentWeather(key: string): void {
        this.selectCurrentWeather.emit(key);
    }

}
