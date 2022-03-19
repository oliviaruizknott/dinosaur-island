import { createSlice } from '@reduxjs/toolkit'

import { initializeDna } from './dnaUtilities'
import { messagePosted } from '../messages/messagesSlice'

// This looks something like:
// dna: {
//   storage: {
//     B1: {
//       id: 'B1',
//       level: 'basic',
//       stored: 0,
//       limit: 3
//     },
//     ...
//   },
//   available: [
//     {
//       count: 1,
//       dnaType: 'AW',
//       threat: 0,
//       researched: false
//     },
//     ...
//   ]
// }
const initialState = initializeDna();

const dnaSlice = createSlice({
  name: 'dna',
  initialState,
  reducers: {
    reset(state, action) {
      return initialState
    },
    limitIncreased: {
      reducer(state, action) {
        state.storage[action.payload.dnaType].limit += action.payload.amount
      },
      prepare(dnaType, amount) {
        return { payload: { dnaType, amount }}
      }
    },
    storedIncreased: {
      reducer(state, action) {
        state.storage[action.payload.dnaType].stored += action.payload.amount
      },
      prepare(dnaType, amount) {
        return { payload: { dnaType, amount }}
      }
    }
  }
})

export const { reset, limitIncreased, storedIncreased } = dnaSlice.actions
export default dnaSlice.reducer

// Selectors -------------------------------------------------------------------

export const selectDna = store => store.dna
export const selectAvailableDna = store => store.dna.available
export const selectAvailableDnaByIndex = (store, index) => store.dna.available[index]
export const selectStoredDnaIds = store => Object.keys(store.dna.storage)
export const selectStoredDnaById = (store, dnaId) => store.dna.storage[dnaId]

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
