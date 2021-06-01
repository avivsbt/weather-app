import { Component, Input, Injector, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/architecture/base.component';
import { LocalStorageKey, LocalStorageTime } from 'src/app/enums/local-storage.enum';
import * as Moment from 'moment';
import * as FavoritesActions from 'src/app/modules/favorites/state/actions/favorites.actions'
import { Favorite } from 'src/app/modules/favorites/models/favorite.model';
import { Weather } from 'src/app/modules/weather/models/weather.model';

@Component({
  selector: 'favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})

export class FavoriteButtonComponent extends BaseComponent implements OnInit, OnDestroy {

  @Input() item: Weather;

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  public addFavorite(): void {

    let items: Favorite[] = this.favoriteStorage;


    if (this.favoriteStorage && this.itemExists) {
      return;
    }

    const favorite = { Key: this.item.Key, LocalizedName: this.item.Name, Country: this.item.Country };
    items = this.favoriteStorage ? [...items, favorite] : [favorite];

    this.storageService.set(LocalStorageKey.favorites, items, Moment().add(30, LocalStorageTime.Days).toDate());
    this.dispatch(FavoritesActions.setFavorite, { favorite: favorite });
  }

  public removeFavorite(): void {

    let items: Favorite[] = this.favoriteStorage;

    if (items && this.itemExists) {
      this.storageService.set(LocalStorageKey.favorites, items.filter(item => item.Key !== this.item.Key), Moment().add(30, LocalStorageTime.Days).toDate());
      this.dispatch(FavoritesActions.deleteFavorite, { Key: this.item.Key });
    }

  }

  public get itemExists(): boolean {
    return this.storageService.get<Favorite[]>(LocalStorageKey.favorites).some(item => item.Key == this.item.Key);
  }

  public get favoriteStorage(): Favorite[] {
    return this.storageService.get<Favorite[]>(LocalStorageKey.favorites);
  }

}
