import { GameType } from './game-type';

export enum Hand {
  Rock,
  Paper,
  Scissors,
  Lizard,
  Spock,
}

const allHands = [ Hand.Rock,
  Hand.Paper,
  Hand.Scissors,
  Hand.Lizard,
  Hand.Spock ];

export function getRandomHand(gameType: GameType): Hand {
  const currentGameHands = gameType === GameType.Basic ? allHands.slice(0, 3) : allHands;
  const randomIndex = Math.floor(Math.random() * 10) % currentGameHands.length;
  return currentGameHands[randomIndex];
}
