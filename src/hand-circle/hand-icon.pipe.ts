import { Pipe, PipeTransform } from '@angular/core';
import { Hand } from '../models/hand';

@Pipe({
  name: 'handIcon'
})
export class HandIconPipe implements PipeTransform {

  transform(hand: Hand): string {
    switch (hand) {
      case Hand.Lizard:
        return `icon-lizard.svg`;
      case Hand.Paper:
        return `icon-paper.svg`;
      case Hand.Rock:
        return `icon-rock.svg`;
      case Hand.Scissors:
        return `icon-scissors.svg`;
      case Hand.Spock:
      default:
        return `icon-spock.svg`;
    }
  }

}
