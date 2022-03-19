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
export var allPossibleDna
export var startingAvailableDna

export function initializeDna() {
  setAvailableDnaDice()
  makeAllPossilbleDna()
  setStartingAvailableDna()

  return getInitialDnaState()
}

function setAvailableDnaDice() {
  availableDnaDiceIndices = shuffle([...Array(ALL_DICE_DATA.length).keys()]).slice(0, availableDnaCount)
}

function makeAllPossilbleDna() {
  allPossibleDna = availableDnaDiceIndices.map((dieIndex) => {
    return ALL_DICE_DATA[dieIndex].map((sideData) => {
      return {
        count: sideData[0],
        dnaType: sideData[1],
        threat: sideData[2],
        researched: false,
      }
    })
  })
}

function setStartingAvailableDna() {
  startingAvailableDna = allPossibleDna.map((dnaDie) => {
    return shuffle(dnaDie)[0]
  })
}

function getInitialDnaState() {
  return {
    storage: generateStartingStorageDna(),
    available: startingAvailableDna
  }
}

export function generateStartingStorageDna() {
  const dnaStarters = [ B1, B2, B3, A1, A2, A3 ]

  let startingStorageDna = {}

  dnaStarters.forEach((key) => {
    let basic = key[0] === 'B';

    startingStorageDna[key] = {
      id: key,
      level: basic ? BASIC : ADVANCED,
      stored: 0,
      limit: basic ? 3 : 1
    }
  });

  return startingStorageDna
}
