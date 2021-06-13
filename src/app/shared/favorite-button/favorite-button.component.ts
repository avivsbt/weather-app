import { Component, Input, Injector, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/architecture/base.component';
import { LocalStorageKey, LocalStorageTime } from 'src/app/enums/local-storage.enum';
import * as Moment from 'moment';
import * as FavoritesActions from 'src/app/modules/favorites/state/actions/favorites.actions'
import { Favorite } from 'src/app/modules/favorites/models/favorite.model';
import { Weather } from 'src/app/modules/weather/models/weather.model';
import { selectAllFavorite, selectFavoriteEntityExists } from 'src/app/modules/favorites/state/selectors/favorites.selectors';

@Component({
  selector: 'favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})

export class FavoriteButtonComponent extends BaseComponent implements OnInit, OnDestroy {

  @Input() item: Weather;
  public favorites: Favorite[];

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.subscriptions.push(this.select(selectAllFavorite).subscribe((favorites: Favorite[]) => {
      this.favorites = favorites;
    }));
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public addFavorite(): void {

    if (this.itemExists) {
      return;
    }
    
    const favorite = { Key: this.item.Key, LocalizedName: this.item.Name, Country: this.item.Country };
    let items: Favorite[]  = this.favorites ? [...this.favorites, favorite] : [favorite];

    this.storageService.set(LocalStorageKey.favorites, items, Moment().add(30, LocalStorageTime.Days).toDate());
    this.dispatch(FavoritesActions.setFavorite, { favorite: favorite });
  }

  public removeFavorite(): void {
    if (this.favorites && this.itemExists) {
      this.storageService.set(LocalStorageKey.favorites, this.favorites.filter(item => item.Key !== this.item.Key), Moment().add(30, LocalStorageTime.Days).toDate());
      this.dispatch(FavoritesActions.deleteFavorite, { Key: this.item.Key });
    }
  }

  public get itemExists(): boolean {
    return this.selectUnsubscribe(selectFavoriteEntityExists, { id: this.item.Key });
  }

}
