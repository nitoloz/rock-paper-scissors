import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameResultsComponent } from './game-results.component';
import { HandCircleModule } from '../hand-circle/hand-circle.module';
import { ResultTextPipe } from './result-text.pipe';


@NgModule({
  declarations: [
    GameResultsComponent,
    ResultTextPipe
  ],
  imports: [
    CommonModule,
    HandCircleModule
  ],
  exports: [ GameResultsComponent ]
})
export class GameResultsModule {
}
