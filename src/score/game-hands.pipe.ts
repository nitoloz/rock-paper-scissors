import { Pipe, PipeTransform } from '@angular/core';
import { GameType } from '../models/game-type';

const gameHands = [ 'rock', 'paper', 'scissors', 'lizard', 'spock' ];

@Pipe({
  name: 'gameHands'
})
export class GameHandsPipe implements PipeTransform {

  transform(gameType: GameType): string[] {
    return gameType === GameType.Basic ? gameHands.slice(0, 3) : gameHands;
  }

}
