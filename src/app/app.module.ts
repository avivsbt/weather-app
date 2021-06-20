/*core*/
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherModule } from './modules/weather/weather.module';

/*store*/
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './modules/weather/state/effects/weather.effects';

/*component*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AlertComponent } from './shared/alert/alert.component';

/*plugins*/
import { LocalStorageModule } from 'angular-2-local-storage';

/*modules*/
import { CommonModule } from '@angular/common';

/*interceptor*/
import { LoaderInterceptor } from './services/interceptors/loader-Interceptor.service.ts';
import { DEFAULT_TIMEOUT, ErrorInterceptor } from './services/interceptors/error-Interceptor.service.ts';

/*services*/
import { StartUpService } from './services/startup.service';

/*translate*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './translation/translation-loader';

const appStartUp = (startup: StartUpService) => {
  return () => {
    return startup.load();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    LocalStorageModule.forRoot({
      prefix: 'app',
      storageType: 'localStorage'
    }),
    EffectsModule.forRoot([
      WeatherEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    WeatherModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: DEFAULT_TIMEOUT, useValue: 30000 },
    { provide: APP_INITIALIZER, useFactory: appStartUp, multi: true, deps: [StartUpService] }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
