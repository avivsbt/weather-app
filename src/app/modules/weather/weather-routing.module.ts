import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from 'src/app/enums/path.enum';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
  {
    path: Path.Weather,
    redirectTo: '',
    component: WeatherComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WeatherRoutingModule { }
