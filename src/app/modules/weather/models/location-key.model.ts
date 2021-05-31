import { RegionAndCountry, AdministrativeArea, GeoPosition, TimeZone } from './geoposition.model';

export interface LocationKey {
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
