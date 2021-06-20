import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from './enums/path.enum';
import { WeatherComponent } from './modules/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherComponent
  },
  {
    path: '**',
    redirectTo: Path.Weather,
    pathMatch: 'full'
  },
  {
    path: Path.Favorites,
    loadChildren: () => import('./modules/favorites/favorites.module').then(mod => mod.FavoritesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
