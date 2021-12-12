import { checkWinner, Winner } from './winner';
import { Hand } from './hand';

describe('Winner', () => {

  it('should return left winner correctly', () => {
    expect(checkWinner(Hand.Rock, Hand.Lizard)).toEqual(Winner.Left);
  });

  it('should return right winner correctly', () => {
    expect(checkWinner(Hand.Paper, Hand.Scissors)).toEqual(Winner.Right);
  });

  it('should return tie correctly', () => {
    expect(checkWinner(Hand.Paper, Hand.Paper)).toEqual(Winner.Tie);
  });
});
