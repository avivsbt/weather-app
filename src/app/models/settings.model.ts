import { Unit } from "../enums/temperature-unit.enum";
import { currentLocation } from "./current-location.model";

export interface Settings {
    currentLocation: currentLocation;
    temperatureUnit: Unit;
    spinner: boolean;
}