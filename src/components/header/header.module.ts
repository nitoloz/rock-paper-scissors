import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { GameTitlePipe } from './game-title.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    GameTitlePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule {
}
