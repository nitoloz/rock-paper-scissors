import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreModule } from '../score/score.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScoreModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
