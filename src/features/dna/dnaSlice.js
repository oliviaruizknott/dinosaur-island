import { createSlice } from '@reduxjs/toolkit'

import {
  initializeDna,
  startingStorageDna,
  rollAllAvailableDna,
  rollAvailableDnaAtIndex
} from './dnaUtilities'
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
//       amount: 1,
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
    storageReset(state, action) {
      state.storage = startingStorageDna
    },
    limitIncreased: {
      reducer(state, action) {
        state.storage[action.payload.dnaType].limit += action.payload.amount
      },
      prepare(dnaType, amount) {
        return { payload: { dnaType, amount }}
      }
    },
    availableRefreshed: {
      reducer(state, action) {
        state.available = action.payload
      },
      prepare(newDna) {
        return { payload: newDna }
      }
    },
    availableRefreshedAtIndex: {
      reducer(state, action) {
        state.available[action.payload.index] = action.payload.newDna
      },
      prepare(index, newDna) {
        return { payload: { index, newDna} }
      }
    },
    researched: {
      reducer(state, action) {
        state.storage[action.payload.dnaType].stored += action.payload.amount
        state.available[action.payload.index].researched = true
      },
      prepare(dnaType, amount, index) {
        return { payload: { dnaType, amount, index } }
      }
    }
  }
})

export const { storageReset, limitIncreased, availableRefreshed, availableRefreshedAtIndex, researched } = dnaSlice.actions
export default dnaSlice.reducer

// Selectors -------------------------------------------------------------------

export const selectDna = store => store.dna
export const selectAvailableDna = store => store.dna.available
export const selectAvailableDnaByIndex = (store, index) => store.dna.available[index]
export const selectStoredDnaIds = store => Object.keys(store.dna.storage)
export const selectStoredDnaById = (store, dnaId) => store.dna.storage[dnaId]

// Thunks ----------------------------------------------------------------------

export const dnaResearched = (index) => (dispatch, getState) => {
  const { dnaType, amount } = getState().dna.available[index]
  const dnaStorage = getState().dna.storage
  if (dnaStorage[dnaType].stored + amount <= dnaStorage[dnaType].limit) {
    // dispatch(storedIncreased(dnaType, amount))
    dispatch(researched(dnaType, amount, index))
  } else {
    dispatch(messagePosted(
      `You cannot increase stored ${dnaType} DNA beyond its current limit of ${dnaStorage[dnaType].limit}. Increase your storage limit instead.`
    ))
  }
}

export const refreshAvailable = () => (dispatch, getState) => {
  const newDna = rollAllAvailableDna()
  dispatch(availableRefreshed(newDna))
}

export const refreshAvailableAtIndex = (index) => (dispatch, getState) => {
  const newDna = rollAvailableDnaAtIndex(index)
  dispatch(availableRefreshedAtIndex(index, newDna))
}
