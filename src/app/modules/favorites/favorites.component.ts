import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/architecture/base.component';
import { LoadWeather, Weather } from '../weather/models/weather.model';
import { selectFavoritesInWeatherStore, selectWeatherIds } from '../weather/state/selectors/weather.selectors';
import { Favorite } from './models/favorite.model';
import { selectFavoriteIds, selectHandleFavoritesIfExistsInWeatherStore } from './state/selectors/favorites.selectors';
import * as WeatherActions from 'src/app/modules/weather/state/actions/weather.actions'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent extends BaseComponent implements OnInit, OnDestroy {

  public weathers: Weather[];

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {

    let favorites: Favorite[] = this.selectUnsubscribe(selectHandleFavoritesIfExistsInWeatherStore, { ids: this.selectUnsubscribe(selectWeatherIds) });

    favorites.forEach((weather: LoadWeather) => {
      this.dispatch(WeatherActions.loadWeather, { LoadWeather: { Key: weather.Key, LocalizedName: weather.LocalizedName, Country: weather.Country } });
    });

    this.subscriptions.push(this.select(selectFavoritesInWeatherStore, { ids: this.selectUnsubscribe(selectFavoriteIds) }).subscribe((weathers: Weather[]) => {
      this.weathers = weathers;
    }));

  }

  ngOnDestroy(): void {

  }

}
