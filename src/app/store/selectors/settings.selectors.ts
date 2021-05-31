import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Settings } from 'src/app/models/settings.model';
import { State, settingsFeatureKey } from '../reducers/settings.reducer';

export const selectSettingsFeature = createFeatureSelector<State>(settingsFeatureKey);

export const selectLocation = createSelector(
    selectSettingsFeature,
    (state: State) => state.currentLocation
);

export const selectTemperatureUnit = createSelector(
    selectSettingsFeature,
    (state: State) => state.temperatureUnit
);

export const selectSpinner = createSelector(
    selectSettingsFeature,
    (state: State) => state.spinner
);

export const selectSettingsModel = createSelector(
    selectSettingsFeature,
    (state: State): Settings => {
        return {
            currentLocation: state.currentLocation,
            temperatureUnit: state.temperatureUnit,
            spinner: state.spinner
        };
    }
);
