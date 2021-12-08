import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandCirclesContainerComponent } from './hand-circles-container.component';
import { HandCircleModule } from '../hand-circle/hand-circle.module';


@NgModule({
  declarations: [ HandCirclesContainerComponent ],
  imports: [
    CommonModule,
    HandCircleModule
  ],
  exports: [ HandCirclesContainerComponent ],
})
export class HandCirclesContainerModule {
}
