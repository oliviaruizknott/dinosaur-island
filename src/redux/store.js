import { configureStore } from '@reduxjs/toolkit'

import dna from "./reducers/dnaSlice";

export default configureStore({
  reducer: { dna }
})
