
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from '../../app/store'

export interface CounterState {
   currency: string
}

const initialState: CounterState = {
   currency: "",
}

export const coinPageSlice = createSlice({
   name: "currency",
   initialState,
   reducers: {
      isCoin: (state, action: PayloadAction<string>) => {
         state.currency = action.payload
      }
   }
})

export const { isCoin } = coinPageSlice.actions

export default coinPageSlice.reducer