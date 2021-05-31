import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './modules/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherComponent
  },
  {
    path: 'favorites',
    loadChildren: () => import('./modules/favorites/favorites.module').then(mod => mod.FavoritesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
