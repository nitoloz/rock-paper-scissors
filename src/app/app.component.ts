import { Component } from '@angular/core';
import { GameType } from './models/game-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  public gameTypeEnum = GameType;

  public changeGameType(): void {

  }

}
