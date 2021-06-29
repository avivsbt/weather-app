import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-weather-icon',
    templateUrl: './weather-icon.component.html',
    styleUrls: ['./weather-icon.component.scss']
})

export class WeatherIconComponent {

    @Input() small: boolean = false;
    @Input() type: number;

    constructor() { }

    cssClass() {
        switch (this.type) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 30:
            case 33:
            case 35:
                return 'clear';
            case 5:
            case 36:
                return 'mostlysunny';
            case 6:
            case 20:
            case 21:
            case 23:
                return 'mostlycloudy';
            case 7:
            case 8:
            case 11:
            case 19:
            case 22:
                return 'cloudy';
            case 32:
                return 'fog';
            case 12:
            case 13:
            case 14:
            case 18:
                return 'chancerain';
            case 15:
            case 17:
                return 'chancetstorms';
            case 16:
                return 'chancesleet';
            case 24:
            case 25:
            case 26:
                return 'chanceflurries';
            case 29:
            case 31:
                return 'chancesnow';
            default:
                return 'clear';
        }
    }

}
