import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from '../header/header.module';
import { ButtonModule } from '../button/button.module';
import { HandCircleModule } from '../hand-circle/hand-circle.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ButtonModule,
    HandCircleModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
