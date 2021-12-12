import { initialState } from '../reducers/app.reducer';
import {
  selectGameScore,
  selectGameType, selectIsLeftWinner, selectIsRightWinner,
  selectLeftPlayerHand,
  selectRightPlayerHand,
  selectShowRulesPopup,
  selectWinner
} from './app.selectors';
import { GameType } from '../../models/game-type';
import { Hand } from '../../models/hand';
import { Winner } from '../../models/winner';

fdescribe("App selectors", () => {

  it("should select the game type", () => {
    const result = selectGameType.projector(initialState);
    expect(result).toEqual(GameType.Basic);
  });

  it("should select the game score", () => {
    const result = selectGameScore.projector({ score: 2 });
    expect(result).toEqual(2);
  });

  it("should select the rules pop-up visibility", () => {
    const result = selectShowRulesPopup.projector({ showRules: true });
    expect(result).toBeTruthy();
  });

  it("should select the hand chosen by left player", () => {
    const resultUndefined = selectLeftPlayerHand.projector({ selectedHands: null });
    expect(resultUndefined).toBeUndefined();
    const resultValue = selectLeftPlayerHand.projector({ selectedHands: { left: Hand.Spock } });
    expect(resultValue).toEqual(Hand.Spock);
  });

  it("should select the hand chosen by right player", () => {
    const resultUndefined = selectRightPlayerHand.projector({ selectedHands: null });
    expect(resultUndefined).toBeUndefined();
    const resultValue = selectRightPlayerHand.projector({ selectedHands: { right: Hand.Lizard } });
    expect(resultValue).toEqual(Hand.Lizard);
  });

  it("should select the winner player", () => {
    const resultUndefined = selectWinner.projector({ selectedHands: null });
    expect(resultUndefined).toBeUndefined();
    const resultValue = selectWinner.projector({ selectedHands: { winner: Winner.Right } });
    expect(resultValue).toEqual(Winner.Right);
  });

  it("should select if right or left player is winner", () => {
    const resultUndefinedLeft = selectIsLeftWinner.projector({ selectedHands: null });
    const resultUndefinedRight = selectIsRightWinner.projector({ selectedHands: null });
    expect(resultUndefinedLeft).toBeFalse();
    expect(resultUndefinedRight).toBeFalse();
    const resultValueLeft = selectIsLeftWinner.projector({ selectedHands: { winner: Winner.Left } });
    const resultValueRight = selectIsRightWinner.projector({ selectedHands: { winner: Winner.Left } });
    expect(resultValueLeft).toBeTrue();
    expect(resultValueRight).toBeFalse();
  });
});
