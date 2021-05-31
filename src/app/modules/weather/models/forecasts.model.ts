
export interface Forecasts {
    Headline: Headline;
    DailyForecasts: DailyForecasts[];
}
export interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: string;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: Date;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}
export interface DailyForecasts {
    Date: Date;
    EpochDate: number;
    Temperature: Temperature;
    Day: DayAndNight;
    Night: DayAndNight;
    Sources: any;
    MobileLink: string;
    Link: string;
}
export interface Temperature {
    Minimum: MinimumAndMaximum;
    Maximum: MinimumAndMaximum;
}
export interface MinimumAndMaximum {
    Value: number;
    Unit: string;
    UnitType: number;
}
export interface DayAndNight {
    Icon: number,
    IconPhrase: string;
    HasPrecipitation: boolean;
}
