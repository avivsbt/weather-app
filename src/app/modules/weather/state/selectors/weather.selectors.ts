import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Weather } from 'src/app/modules/weather/models/weather.model';
import * as WeatherReducer from '../reducers/weather.reducer';

export const selectWeatherFeature = createFeatureSelector<WeatherReducer.State>(
    WeatherReducer.weathersFeatureKey
);

export const selectAllWeather = createSelector(
    selectWeatherFeature,
    WeatherReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectWeatherFeature,
    WeatherReducer.selectEntities
);

export const selectCurrent = createSelector(
    selectWeatherFeature,
    (state: WeatherReducer.State) => state.currentWeather
);

export const selectCurrentWeather = createSelector(
    selectAllEntities,
    selectCurrent,
    (entities, props) => entities[props]
);

export const selectWeatherIds = createSelector(
    selectWeatherFeature,
    WeatherReducer.selectIds
);

export const selectWeatherEntityExists = createSelector(
    selectAllEntities,
    (entities: { [x: string]: any; }, props: { id: string | number; }): boolean => {
        return entities[props.id] == undefined ? false : true;
    }
);

export const selectGetFavoritesFromWeatherStore = createSelector(
    selectAllWeather,
    (entities: Weather[], props: { ids: any; }): any => {
        return entities.filter((item: Weather) => {
            if (props.ids.includes(item.Key)) {
                return item
            }
            return null;
        });
    }
);