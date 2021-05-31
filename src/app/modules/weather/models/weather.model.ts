import { Temperature } from './current-conditions.model';
import { Forecasts } from './forecasts.model';

export class Weather {
    Key: string;
    Name: string;
    Country: string;
    DateTime: string;
    Temperature: Temperature;
    WeatherIcon: number;
    WeatherText: string;
    DailyForecasts: Forecasts["DailyForecasts"]

    constructor(init?: Partial<Weather>) {
        Object.assign(this, init);
    }
}

export interface LoadWeather {
    Key: string,
    LocalizedName: string,
    Country: string
}
