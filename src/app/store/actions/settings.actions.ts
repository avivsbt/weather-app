import { createAction, props } from '@ngrx/store';
import { Unit } from 'src/app/enums/temperature-unit.enum';
import { currentLocation } from 'src/app/models/current-location.model';

export const setCurrentLocation = createAction('[Settings] Set current location', props<{ currentLocation: currentLocation }>());

export const setTemperatureUnit = createAction('[Settings] Set unit celsius', props<{ temperatureUnit: Unit }>());

export const handleSpinner = createAction('[Settings] Handle spinner', props<{ spinner: boolean }>());



