// import { Injectable } from '@angular/core';
// import { StorageService } from 'src/app/services/local-storage.service';
// import * as Moment from 'moment';
// import { Subject } from 'rxjs';
// import { Store } from '@ngrx/store';
// import * as fromApp from '../../store/app.reducers';
// import * as FavoritesActions from '../../store/favorites/favorites.actions';

// @Injectable({ providedIn: 'root' })

// export class favoriteButtonService {

//     private favorite: string[];
//     private readonly favoriteSubject = new Subject<string[]>();
//     readonly favoriteState = this.favoriteSubject.asObservable();

//     constructor(
//         private storageService: StorageService,
//         private store: Store<fromApp.AppState>,
//     ) { }

//     addFavorite(id: string, type: string) {
//         if (!this.favorite.includes(id)) {
//             this.favorite = [...this.favorite, id];
//             this.storageService.set(type, this.favorite, Moment().add(30, 'day').toDate());
//             this.store.dispatch(new FavoritesActions.AddMyFavorite(id));
//             this.favoriteSubject.next(this.favorite);
//         }
//     }

//     removeFavorite(id: string, type: string) {
//         if (this.favorite.includes(id)) {
//             this.favorite = this.favorite.filter(favoriteId => favoriteId !== id);
//             this.storageService.set(type, this.favorite, Moment().add(30, 'day').toDate());
//             this.store.dispatch(new FavoritesActions.RemoveMyFavorite(id));
//             this.favoriteSubject.next(this.favorite);
//         }
//     }

//     setFavorite(type: string) {
//         if (!this.storageService.get<string[]>(type)) {
//             this.storageService.set(type, [], Moment().add(30, 'days').toDate());
//         }
//         this.favorite = this.storageService.get<string[]>(type);
//         setTimeout(() => {
//             this.favoriteSubject.next(this.favorite);
//         }, 0);
//     }
// }