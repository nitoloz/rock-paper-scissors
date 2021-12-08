import { Component, Input, OnInit } from '@angular/core';
import { GameType } from '../../models/game-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  @Input() public gameType = GameType.Basic;
  @Input() public score = 0;

  public gameTypeEnum = GameType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
