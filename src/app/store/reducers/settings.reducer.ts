
import { createReducer, on } from '@ngrx/store';
import { Unit } from 'src/app/enums/temperature-unit.enum';
import { currentLocation } from 'src/app/models/current-location.model';
import * as settingsActions from '../actions/settings.actions';

export const settingsFeatureKey = 'settings';

export interface State {
    currentLocation: currentLocation;
    temperatureUnit: Unit;
    spinner: boolean
}

export const initialState: State = {
    currentLocation: null,
    temperatureUnit: null,
    spinner: null
};

export const reducer = createReducer(
    initialState,
    on(settingsActions.setCurrentLocation, (state, action) => {
        return {
            ...state,
            currentLocation: action.currentLocation,
        };
    }),
    on(settingsActions.setTemperatureUnit, (state, action) => {
        return {
            ...state,
            temperatureUnit: action.temperatureUnit
        };
    }),
    on(settingsActions.handleSpinner, (state, action) => {
        return {
            ...state,
            spinner: action.spinner
        };
    })
);