import { createAction, props } from '@ngrx/store';
import { Favorite } from '../../models/favorite.model';

export const setFavorite = createAction('[Favorite] Set favorite', props<{ favorite: Favorite }>());

export const deleteFavorite = createAction('[Favorite] Delete favorite', props<{ Key: string }>());