export interface Autocomplete {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: CountryAndAdministrativeArea;
    AdministrativeArea: CountryAndAdministrativeArea;
}
export interface CountryAndAdministrativeArea {
    ID: string;
    LocalizedName: string;
}
