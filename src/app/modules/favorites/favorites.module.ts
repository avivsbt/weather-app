import { NgModule } from '@angular/core';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoritesComponent } from '../favorites/favorites.component';
import { FavoritesItemComponent } from './components/favorites-item/favorites-item.component';

@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule.forRoot()
  ],
  exports: [
    FavoritesComponent,
    FavoritesItemComponent
  ],
  declarations: [
    FavoritesComponent,
    FavoritesItemComponent
  ],
  providers: [],
})

export class FavoritesModule { }
