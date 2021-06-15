
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Alert } from 'src/app/models/alerts.model';
import * as alertsActions from '../actions/alerts.actions';

export const alertsFeatureKey = 'alerts';

export interface State extends EntityState<Alert> {

}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
    selectId: selectAlertId
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
    initialState,
    on(alertsActions.addAlert, (state, action) => adapter.addOne(action.alert, { ...state })),
    on(alertsActions.clearAlerts, (state) => adapter.removeAll({ ...state, selectId: null }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export function selectAlertId(alert: Alert): string {
    return alert.id;
}