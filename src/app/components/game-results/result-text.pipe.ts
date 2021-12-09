import { Pipe, PipeTransform } from '@angular/core';
import { Winner } from '../../models/winner';

@Pipe({
  name: 'resultText'
})
export class ResultTextPipe implements PipeTransform {

  transform(winner: Winner): string {
    switch (winner) {
      case Winner.Left:
        return 'you win';
      case Winner.Right:
        return 'you lose';
      case Winner.Tie:
        return 'you tie';
    }
  }

}
