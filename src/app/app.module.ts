import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreModule } from '../score/score.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScoreModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
