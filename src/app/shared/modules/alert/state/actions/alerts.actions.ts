import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Alert } from 'src/app/shared/modules/alert/models/alerts.model';

export const addAlert = createAction('[Alerts] Add alert', props<{ alert: Alert }>());

export const clearAlerts = createAction('[Alerts] Clear alerts');

export const updateAlert = createAction('[Alerts] Update alert', props<{ update: Update<Alert> }>());