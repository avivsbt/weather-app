
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TempConverterPipe } from 'src/app/shared/pipes/temp.converter.pipe';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { SearchComponent } from './modules/search/search.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { WeatherTemperatureComponent } from './components/weather-temperature/weather-temperature.component';

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
        WeatherIconComponent,
        TempConverterPipe
    ],
    declarations: [
        SearchComponent,
        FavoriteButtonComponent,
        WeatherTemperatureComponent,
        WeatherIconComponent,
        TempConverterPipe
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
