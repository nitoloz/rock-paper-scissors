import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { ButtonModule } from './components/button/button.module';
import { HandCirclesContainerModule } from './components/hand-circles-container/hand-circles-container.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ButtonModule,
    HandCirclesContainerModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
