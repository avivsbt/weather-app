import { MetricAndImperial } from './current-conditions.model';

export interface Geoposition {
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    EnglishName: string,
    PrimaryPostalCode: string,
    Region: RegionAndCountry;
    Country: RegionAndCountry;
    AdministrativeArea: AdministrativeArea;
    TimeZone: TimeZone;
    GeoPosition: GeoPosition;
    IsAlias: boolean;
    SupplementalAdminAreas: any;
    DataSets: any;
}
export interface RegionAndCountry {
    ID: string,
    LocalizedName: string,
    EnglishName: string
}
export interface AdministrativeArea {
    ID: string,
    LocalizedName: string;
    EnglishName: string;
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
}
export interface TimeZone {
    Code: string;
    Name: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    NextOffsetChange: string;
}
export interface GeoPosition {
    Latitude: number;
    Longitude: number;
    Elevation: Elevation;
}
export interface Elevation {
    Metric: MetricAndImperial;
    Imperial: MetricAndImperial;
}


