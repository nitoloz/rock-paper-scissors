import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from '../components/header/header.module';
import { ButtonModule } from '../components/button/button.module';
import { HandCirclesContainerModule } from '../components/hand-circles-container/hand-circles-container.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ButtonModule,
    HandCirclesContainerModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
