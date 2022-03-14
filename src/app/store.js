import { configureStore } from '@reduxjs/toolkit'

import dna from "../features/dna/dnaSlice";

export default configureStore({
  reducer: { dna }
})
