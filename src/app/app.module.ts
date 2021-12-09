import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HandCirclesContainerModule } from './components/hand-circles-container/hand-circles-container.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers';
import { ButtonsContainerModule } from './components/buttons-container/buttons-container.module';
import { RulesOverlayModule } from './components/rules-overlay/rules-overlay.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HandCirclesContainerModule,
    StoreModule.forRoot(reducers),
    ButtonsContainerModule,
    RulesOverlayModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
