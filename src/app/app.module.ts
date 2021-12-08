import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from '../components/header/header.module';
import { ButtonModule } from '../components/button/button.module';
import { HandCircleModule } from '../components/hand-circle/hand-circle.module';

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
