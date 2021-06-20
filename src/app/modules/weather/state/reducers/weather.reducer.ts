import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as WeatherActions from '../actions/weather.actions';
import { Weather } from 'src/app/modules/weather/models/weather.model';

export const weathersFeatureKey = 'weathers';

export interface State extends EntityState<Weather> {
    currentWeather: string;
}

export const adapter: EntityAdapter<Weather> = createEntityAdapter<Weather>({
    sortComparer: sortByName,
    selectId: selectWeatherId
});

export const initialState: State = adapter.getInitialState({
    currentWeather: null,
});

export const reducer = createReducer(
    initialState,
    on(
        WeatherActions.loadWeatherSuccess, (state, action) => adapter.addOne(action.weather, { ...state })
    ),
    on(WeatherActions.setCurrentWeather, (state, action) => {
        return {
            ...state,
            currentWeather: action.Key,
        };
    }),
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export function sortByName(a: Weather, b: Weather): number {
    return a.Name.localeCompare(b.Name);
}

export function selectWeatherId(a: Weather): string {
    return a.Key;
}