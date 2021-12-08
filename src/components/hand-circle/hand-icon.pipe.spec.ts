import { HandIconPipe } from './hand-icon.pipe';
import { Hand } from '../../models/hand';

describe('HandIconPipe', () => {
  it('create an instance', () => {
    const pipe = new HandIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return lizard icon for Lizard hand', () => {
    const pipe = new HandIconPipe();
    expect(pipe.transform(Hand.Lizard)).toBe('icon-lizard.svg');
  });

  it('should return rock icon for Rock hand', () => {
    const pipe = new HandIconPipe();
    expect(pipe.transform(Hand.Rock)).toBe('icon-rock.svg');
  });

  it('should return paper icon for Paper hand', () => {
    const pipe = new HandIconPipe();
    expect(pipe.transform(Hand.Paper)).toBe('icon-paper.svg');
  });

  it('should return scissors icon for Scissors hand', () => {
    const pipe = new HandIconPipe();
    expect(pipe.transform(Hand.Scissors)).toBe('icon-scissors.svg');
  });

  it('should return spock icon for Spock hand', () => {
    const pipe = new HandIconPipe();
    expect(pipe.transform(Hand.Spock)).toBe('icon-spock.svg');
  });
});
