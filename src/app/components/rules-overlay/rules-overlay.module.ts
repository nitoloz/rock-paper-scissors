import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesOverlayComponent } from './rules-overlay.component';


@NgModule({
  declarations: [
    RulesOverlayComponent
  ],
  exports: [
    RulesOverlayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RulesOverlayModule {
}
