import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandCircleComponent } from './hand-circle.component';
import { HandIconPipe } from './hand-icon.pipe';

@NgModule({
  declarations: [ HandCircleComponent, HandIconPipe ],
  imports: [ CommonModule ],
  exports: [ HandCircleComponent ]
})
export class HandCircleModule {
}
