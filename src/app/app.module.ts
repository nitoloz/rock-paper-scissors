import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HandCirclesContainerModule } from './components/hand-circles-container/hand-circles-container.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers';
import { ButtonsContainerModule } from './components/buttons-container/buttons-container.module';
import { RulesOverlayModule } from './components/rules-overlay/rules-overlay.module';
import { GameResultsModule } from './components/game-results/game-results.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    HandCirclesContainerModule,
    StoreModule.forRoot(reducers),
    ButtonsContainerModule,
    RulesOverlayModule,
    GameResultsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
