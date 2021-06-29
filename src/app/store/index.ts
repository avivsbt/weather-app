import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromSettings from './reducers/settings.reducer';
import * as fromAlerts from '../shared/modules/alert/state/reducers/alerts.reducer';
import * as fromWeather from '../modules/weather/state/reducers/weather.reducer';
import * as fromFavorite from '../modules/favorites/state/reducers/favorites.reducer';
import { environment } from '../../environments/environment';

export interface AppState {
    router: fromRouter.RouterReducerState;
    [fromSettings.settingsFeatureKey]: fromSettings.State;
    [fromWeather.weathersFeatureKey]: fromWeather.State;
    [fromFavorite.favoritesFeatureKey]: fromFavorite.State;
    [fromAlerts.alertsFeatureKey]: fromAlerts.State;
}

export const reducers: ActionReducerMap<AppState> = {
    router: fromRouter.routerReducer,
    [fromSettings.settingsFeatureKey]: fromSettings.reducer,
    [fromWeather.weathersFeatureKey]: fromWeather.reducer,
    [fromFavorite.favoritesFeatureKey]: fromFavorite.reducer,
    [fromAlerts.alertsFeatureKey]: fromAlerts.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}