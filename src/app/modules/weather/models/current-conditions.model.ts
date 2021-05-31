export interface CurrentConditions {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: any;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
}
export interface Temperature {
    Metric: MetricAndImperial;
    Imperial: MetricAndImperial;
}
export interface MetricAndImperial {
    Value: number;
    Unit: string;
    UnitType: number;
}
