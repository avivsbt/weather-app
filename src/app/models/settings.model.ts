import { Unit } from "../enums/temperature-unit.enum";
import { currentLocation } from "./current-location.model";
import { Spinner } from "./spinner.models";

export interface Settings {
    currentLocation: currentLocation;
    temperatureUnit: Unit;
    spinner: Spinner;
}