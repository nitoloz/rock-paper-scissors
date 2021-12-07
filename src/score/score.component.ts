import { Component, Input, OnInit } from '@angular/core';
import { GameType } from '../models/game-type';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: [ './score.component.css' ]
})
export class ScoreComponent implements OnInit {

  @Input() public gameType = GameType.Basic;
  @Input() public score = 0;

  public gameTypeEnum = GameType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
