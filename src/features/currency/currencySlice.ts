
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from '../../app/store'

export interface CounterState {
   currency: string
}

const initialState: CounterState = {
   currency: "USD",
}

export const currencySlice = createSlice({
   name: "currency",
   initialState,
   reducers: {
      toggleCurrency: (state, action: PayloadAction<string>) => {
         state.currency = action.payload
      }
   }
})

export const { toggleCurrency } = currencySlice.actions

export default currencySlice.reducer