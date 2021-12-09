import { Hand } from './hand';

export enum Winner {
  Left = 'left',
  Right = 'right',
  Tie = 'tie'
}

export const winningHands = {
  [Hand.Rock]: [ Hand.Lizard, Hand.Scissors ],
  [Hand.Paper]: [ Hand.Rock, Hand.Spock ],
  [Hand.Scissors]: [ Hand.Paper, Hand.Lizard ],
  [Hand.Lizard]: [ Hand.Spock, Hand.Paper ],
  [Hand.Spock]: [ Hand.Scissors, Hand.Rock ],
};

export function checkWinner(leftHand: Hand, rightHand: Hand): Winner {
  if (winningHands[leftHand].includes(rightHand)) {
    return Winner.Left;
  }
  if (winningHands[rightHand].includes(leftHand)) {
    return Winner.Right;
  }
  return Winner.Tie;
}
