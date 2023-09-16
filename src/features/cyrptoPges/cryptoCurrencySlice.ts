
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from '../../app/store'

export interface CounterState {
   inputValue: string
}

const initialState: CounterState = {
   inputValue: "",
}

export const currencySlice = createSlice({
   name: "currency",
   initialState,
   reducers: {
      inputValueUpdate: (state, action: PayloadAction<string>) => {
         state.inputValue = action.payload
      }
   }
})

export const { inputValueUpdate } = currencySlice.actions

export default currencySlice.reducer