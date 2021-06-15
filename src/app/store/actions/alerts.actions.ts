import { createAction, props } from '@ngrx/store';
import { Alert } from 'src/app/models/alerts.model';

export const addAlert = createAction('[Alerts] Add alert', props<{ alert: Alert }>());

export const clearAlerts = createAction('[Alerts] Clear alerts');