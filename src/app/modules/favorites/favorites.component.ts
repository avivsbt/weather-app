import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/architecture/base.component';
import { LoadWeather, Weather } from '../weather/models/weather.model';
import { selectGetFavoritesFromWeatherStore, selectWeatherIds } from '../weather/state/selectors/weather.selectors';
import { Favorite } from './models/favorite.model';
import { selectFavoriteIds, selectFilterFavoritesFromWeatherStore } from './state/selectors/favorites.selectors';
import * as WeatherActions from 'src/app/modules/weather/state/actions/weather.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent extends BaseComponent implements OnInit, OnDestroy {

  public weathers$: Observable<Weather[]>;

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.fetchFavorites();

    this.subscriptions.push(this.select(selectFavoriteIds).subscribe((ids: string[]) => {
      this.weathers$ = this.select(selectGetFavoritesFromWeatherStore, { ids: ids });
    }));
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }


  private fetchFavorites(): void {
    let favorites: Favorite[] = this.selectUnsubscribe(selectFilterFavoritesFromWeatherStore, { ids: this.selectUnsubscribe(selectWeatherIds) });

    favorites.forEach((weather: LoadWeather) => {
      this.dispatch(WeatherActions.loadWeather, { LoadWeather: { Key: weather.Key, LocalizedName: weather.LocalizedName, Country: weather.Country } });
    });
  }

  public selectCurrentWeather(key: string): void {
    this.dispatch(WeatherActions.setCurrentWeather, { Key: key });
    this.navigateTo(this.pathService.weather);
  }
}
