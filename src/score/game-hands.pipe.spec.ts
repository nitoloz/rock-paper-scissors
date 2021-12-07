import { GameHandsPipe } from './game-hands.pipe';
import { GameType } from '../models/game-type';

describe('GameHandsPipe', () => {
  it('create an instance', () => {
    const pipe = new GameHandsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 3 hands for basic game', () => {
    const pipe = new GameHandsPipe();
    expect(pipe.transform(GameType.Basic).length).toBe(3);
  });

  it('should return 5 hands for advanced game', () => {
    const pipe = new GameHandsPipe();
    expect(pipe.transform(GameType.Advanced).length).toBe(5);
  });
});
