import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as FavoritesActions from '../actions/favorites.actions';
import { Favorite } from '../../models/favorite.model';

export const favoritesFeatureKey = 'favorites';

export interface State extends EntityState<Favorite> {
    
}

export const adapter: EntityAdapter<Favorite> = createEntityAdapter<Favorite>({
    selectId: selectFavoriteId
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
    initialState,
    on(
        FavoritesActions.setFavorite,
        (state, action) => adapter.addOne(action.favorite, {
            ...state
        })
    ),   
    on(
        FavoritesActions.setFavorites,
        (state, action) => adapter.addMany(action.favorite, {
            ...state
        })
    ),    
    on(FavoritesActions.deleteFavorite, (state, { Key }) => {
        return adapter.removeOne(Key, state);
    }),    
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export function selectFavoriteId(a: Favorite): string {
    return a.Key;
}