import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  'Somehow, you have acquired an empty dinosaur park.',
  'You have a lab, 1 dino recipe, some staff, and $15.',
]

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messagePosted: {
      reducer(state, action) {
        state.push([action.payload.message])
      },
      prepare(message) {
        return { payload: { message } }
      }
    }
  }
})

export const { messagePosted } = messagesSlice.actions
export default messagesSlice.reducer

// Selectors -------------------------------------------------------------------

export const selectMessages = store => store.messages
export const selectMessagesCount = store => store.messages.length
