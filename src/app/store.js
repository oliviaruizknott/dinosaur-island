import { configureStore } from '@reduxjs/toolkit'

import dna from "../features/dna/dnaSlice";
import messages from "../features/messages/messagesSlice";

export default configureStore({
  reducer: { dna, messages }
})
