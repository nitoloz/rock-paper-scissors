import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsContainerComponent } from './buttons-container.component';
import { ButtonModule } from '../button/button.module';


@NgModule({
  declarations: [
    ButtonsContainerComponent
  ],
  exports: [
    ButtonsContainerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ]
})
export class ButtonsContainerModule {
}
