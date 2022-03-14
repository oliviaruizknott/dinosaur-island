import { createSlice } from '@reduxjs/toolkit'

import { B1, B2, B3, A1, A2, A3, BASIC, ADVANCED, ROUND, SQUARE } from '../../constants';
import { messagePosted } from '../messages/messagesSlice'

// This looks something like:
// dna: {
//   B1: {
//     id: 'B1',
//     metadata: {
//       type: 'basic',
//       color: '#5ABDD5',
//       shape: 'round'
//     },
//     stored: 0,
//     limit: 3
//   },
//   ...
// }
const initialState = generateStartingDna();

const dnaSlice = createSlice({
  name: 'dna',
  initialState,
  reducers: {
    reset(state, action) {
      return initialState
    },
    limitIncreased: {
      reducer(state, action) {
        state[action.payload.dnaType].limit += action.payload.amount
      },
      prepare(dnaType, amount) {
        return { payload: { dnaType, amount }}
      }
    },
    storedIncreased: {
      reducer(state, action) {
        state[action.payload.dnaType].stored += action.payload.amount
      },
      prepare(dnaType, amount) {
        return { payload: { dnaType, amount }}
      }
    }
  }
})

export const { reset, limitIncreased, storedIncreased } = dnaSlice.actions
export default dnaSlice.reducer

// Helpful Functions -----------------------------------------------------------
function generateStartingDna() {
  const dnaStarters = {
    [B1]: "#5ABDD5",
    [B2]: "#B465A5",
    [B3]: "#5970B6",
    [A1]: "#7CC040",
    [A2]: "#E9248B",
    [A3]: "#F7CD12"
  }

  let startingDna = {}

  Object.keys(dnaStarters).forEach((key) => {
    let basic = key[0] === "B";

    startingDna[key] = {
      id: key,
      metadata : {
        type: basic ? BASIC : ADVANCED,
        color: dnaStarters[key],
        shape: basic ? ROUND : SQUARE
      },
      stored: 0,
      limit: basic ? 3 : 1
    }
  });

  return startingDna;
}

// Selectors -------------------------------------------------------------------

export const selectDna = store => store.dna
export const selectDnaIds = store => Object.keys(store.dna)
export const selectDnaById = (store, dnaId) => store.dna[dnaId]

// Thunks ----------------------------------------------------------------------

export const tryStoredIncrease = (dnaType, amount) => (dispatch, getState) => {
  let dna = getState().dna
  if (dna[dnaType].stored + amount <= dna[dnaType].limit) {
    dispatch(storedIncreased(dnaType, amount))
  } else {
    dispatch(messagePosted(
      `You cannot increase stored ${dnaType} DNA beyond its current limit of ${dna[dnaType].limit}. Increase your storage limit instead.`
    ))
  }
}
