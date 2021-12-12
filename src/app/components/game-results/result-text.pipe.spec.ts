import { ResultTextPipe } from './result-text.pipe';
import { Winner } from '../../models/winner';

describe('ResultTextPipe', () => {
  it('create an instance', () => {
    const pipe = new ResultTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return `you win` for left winner', () => {
    const pipe = new ResultTextPipe();
    expect(pipe.transform(Winner.Left)).toEqual('you win');
  });

  it('should return `you lose` for right winner', () => {
    const pipe = new ResultTextPipe();
    expect(pipe.transform(Winner.Right)).toEqual('you lose');
  });

  it('should return `you tie` for right winner', () => {
    const pipe = new ResultTextPipe();
    expect(pipe.transform(Winner.Tie)).toEqual('you tie');
  });
});
