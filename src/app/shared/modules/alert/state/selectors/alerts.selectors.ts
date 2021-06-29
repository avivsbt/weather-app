import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AlertsReducer from '../reducers/alerts.reducer';

export const selectAlertsFeature = createFeatureSelector<AlertsReducer.State>(
    AlertsReducer.alertsFeatureKey
);

export const selectAllAlerts = createSelector(
    selectAlertsFeature,
    AlertsReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectAlertsFeature,
    AlertsReducer.selectEntities
);

export const selectAlertsIds = createSelector(
    selectAlertsFeature,
    AlertsReducer.selectIds
);