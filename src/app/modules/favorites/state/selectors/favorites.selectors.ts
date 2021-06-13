import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Favorite } from '../../models/favorite.model';
import * as FavoriteReducer from '../reducers/favorites.reducer';

export const selectFavoriteFeature = createFeatureSelector<FavoriteReducer.State>(
    FavoriteReducer.favoritesFeatureKey
);

export const selectAllFavorite = createSelector(
    selectFavoriteFeature,
    FavoriteReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectFavoriteFeature,
    FavoriteReducer.selectEntities
);

export const selectFavoriteIds = createSelector(
    selectFavoriteFeature,
    FavoriteReducer.selectIds
);

export const selectFavoriteEntityExists = createSelector(
    selectAllEntities,
    (entities: { [x: string]: any; }, props: { id: string | number; }): boolean => {
        return entities[props.id] == undefined ? false : true;
    }
);

export const selectFilterFavoritesFromWeatherStore = createSelector(
    selectAllFavorite,
    (entities: Favorite[], props: { ids: any; }): any => {
        return entities.filter((item: Favorite) => {
            if (!props.ids.includes(item.Key)) {
                return item
            }
            return null;
        });
    }
);
