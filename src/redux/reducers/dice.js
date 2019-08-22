import { ALL_DICE_DATA } from '../../constants';
import { shuffle } from '../../utilities';

const initialState = generateGameDice(5);

export default function(state = initialState, action) {
  return state;
}

// Helpful Functions -----------------------------------------------------------
function generateGameDice(diceCount) {
  const allDice = makeAllDice();
  const gameDice = selectDice(diceCount, allDice);
  return gameDice;
}

function makeAllDice() {
  const allDice = [];
  for (let diceData of ALL_DICE_DATA) {
    const die = [];
    for (let diceSide of diceData) {
      const diceSideObject = {
        dnaCount: diceSide[0],
        dnaType: diceSide[1],
        threat: diceSide[2]
      }
      die.push(diceSideObject);
    }
    allDice.push(die);
  }
  return allDice;
}

function selectDice(diceCount, allDice) {
  const gameDice = [];
  for (let i = 0; i < diceCount; i++) {
    gameDice.push(shuffle(allDice).pop())
  }
  return gameDice;
}
