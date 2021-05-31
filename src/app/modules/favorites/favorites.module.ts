import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from '../favorites/favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule.forRoot()
  ],
  exports: [
    FavoritesComponent
  ],
  declarations: [
    FavoritesComponent
  ],
  providers: [],
})

export class FavoritesModule { }
