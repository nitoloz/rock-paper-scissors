import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';
import { GameHandsPipe } from './game-hands.pipe';


@NgModule({
  declarations: [
    ScoreComponent,
    GameHandsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ ScoreComponent ]
})
export class ScoreModule {
}
