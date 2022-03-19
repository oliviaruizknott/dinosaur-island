import { shuffle } from '../../utilities'

export const BASIC = 'basic'
export const ADVANCED = 'advanced'

export const B1 = 'B1';
export const B2 = 'B2';
export const B3 = 'B3';
export const A1 = 'A1';
export const A2 = 'A2';
export const A3 = 'A3';

export const BW = 'BW'; // basic wild
export const AW = 'AW'; // basic wild
export const UP = 'UP'; // this stands for 'upgrade paddock'
export const GW = 'GW'; // this stands for 'gain worker'

// The data for each die face is written in the format: [count, type, threat]
export const ALL_DICE_DATA = [
  [
    [3, B2, 2],
    [1, B2, 3],
    [1, B1, 1],
    [1, B3, 1],
    [1, A3, 0],
    [2, B2, 2],
  ],
  [
    [3, B3, 2],
    [1, B1, 3],
    [1, A2, 0],
    [1, B2, 1],
    [1, B3, 1],
    [2, B1, 2]
  ],
  [
    [1, A3, 0],
    [1, B2, 2],
    [1, B1, 3],
    [1, B3, 1],
    [2, B3, 2],
    [3, B1, 1]
  ],
  [
    [3, BW, 2],
    [1, B2, 2],
    [1, A2, 0],
    [2, B2, 1],
    [1, B3, 2],
    [1, B1, 1]
  ],
  [
    [2, BW, 2],
    [1, B1, 1],
    [1, B3, 2],
    [1, B2, 1],
    [1, A1, 0],
    [2, B1, 2]
  ],
  [
    [1, BW, 1],
    [1, B1, 2],
    [1, B2, 3],
    [1, A2, 0],
    [1, B3, 1],
    [2, B3, 2]
  ],
  [
    [2, B3, 1],
    [1, B1, 1],
    [1, B3, 3],
    [2, B2, 2],
    [1, B2, 2],
    [2, B1, 2]
  ],
  [
    [1, AW, 0],
    [1, B1, 2],
    [1, B2, 3],
    [1, B3, 1],
    [2, B3, 1],
    [1, A1, 0]
  ],
  [
    [1, UP, 2],
    [1, B1, 2],
    [1, B2, 3],
    [2, B2, 1],
    [1, B3, 1],
    [1, A1, 0]
  ],
  [
    [1, GW, 1],
    [1, B1, 2],
    [2, B1, 2],
    [1, A3, 0],
    [1, B3, 1],
    [1, B2, 3]
  ],
  [
    [1, AW, 0],
    [1, AW, 0],
    [1, BW, 0],
    [2, BW, 0],
    [3, BW, 0],
    [1, BW, 0]
  ]
]

const availableDnaCount = 5

// these are set at game initiation and will not change
export var availableDnaDiceIndices

function generateStartingAvailableDna() {
  availableDnaDiceIndices = shuffle([...Array(ALL_DICE_DATA.length).keys()]).slice(0, availableDnaCount)

  return availableDnaDiceIndices.map((die) => {
    return rollDnaDie(die)
  })
}

function rollDnaDie(dieIndex) {
  const dieData = ALL_DICE_DATA[dieIndex]
  const sideData = shuffle(dieData).pop()
  return {
    count: sideData[0],
    dnaType: sideData[1],
    threat: sideData[2],
    researched: false,
  }
}

export function generateDnaDice(diceCount) {
  const allDice = makeAllDice();
  const gameDice = selectGameDice(diceCount, allDice);
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

function selectGameDice(diceCount, allDice) {
  const gameDice = [];
  for (let i = 0; i < diceCount; i++) {
    gameDice.push(shuffle(allDice).pop())
  }
  return gameDice;
}

export function generateStartingDna() {
  const dnaStarters = {
    [B1]: '#5ABDD5',
    [B2]: '#B465A5',
    [B3]: '#5970B6',
    [A1]: '#7CC040',
    [A2]: '#E9248B',
    [A3]: '#F7CD12'
  }

  let startingStorageDna = {}

  Object.keys(dnaStarters).forEach((key) => {
    let basic = key[0] === 'B';

    startingStorageDna[key] = {
      id: key,
      level: basic ? BASIC : ADVANCED,
      stored: 0,
      limit: basic ? 3 : 1
    }
  });

  return {
    storage: startingStorageDna,
    available: generateStartingAvailableDna()
  }
}
