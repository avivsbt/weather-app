import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as FavoriteReducer from '../reducers/favorites.reducer';

export const selectWeatherFeature = createFeatureSelector<FavoriteReducer.State>(
    FavoriteReducer.favoritesFeatureKey
);

export const selectAllWeather = createSelector(
    selectWeatherFeature,
    FavoriteReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectWeatherFeature,
    FavoriteReducer.selectEntities
);




