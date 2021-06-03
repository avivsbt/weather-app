
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { SearchComponent } from './search/search.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { WeatherTemperatureComponent } from './weather-temperature/weather-temperature.component';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule,
        SearchComponent,
        FavoriteButtonComponent,
        WeatherTemperatureComponent,
        WeatherIconComponent
    ],
    declarations: [
        SearchComponent,
        FavoriteButtonComponent,
        WeatherTemperatureComponent,
        WeatherIconComponent
    ],
    providers: [],
    entryComponents: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule
        };
    }
}
