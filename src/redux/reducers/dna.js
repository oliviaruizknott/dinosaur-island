import { BASIC, ADVANCED, ROUND, SQUARE } from '../../constants';

// This looks something like:
// dna: {
//   "B1": {
//     type: BASIC,
//     color: "#5ABDD5",
//     shape: ROUND
//     stored: 0,
//     limit: 3
//   }
//   ...
// }
const initialState = generateStartingDna();

export default function(state = initialState, action) {
  return state;
}

// Helpful Functions -----------------------------------------------------------
function generateStartingDna() {
  const dnaStarters = {
    "B1": "#5ABDD5",
    "B2": "#B465A5",
    "B3": "#5970B6",
    "A1": "#7CC040",
    "A2": "#E9248B",
    "A3": "#F7CD12"
  }

  let startingDna = {}

  Object.keys(dnaStarters).forEach((key) => {
    let basic = key[0] === "B";

    startingDna[key] = {
      type: basic ? BASIC : ADVANCED,
      color: dnaStarters[key],
      shape: basic ? ROUND : SQUARE,
      stored: 0,
      limit: basic ? 3 : 1
    }
  });

  return startingDna;
}
