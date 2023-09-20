

import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from "../features/currency/currencySlice"
import inputReducer from "../features/input/inputSlice"
import coinPageSlice from "../features/page/coinPageSlice"



export const store = configureStore({
   reducer: {
      currency: currencyReducer,
      inputValue: inputReducer,
      isCoin: coinPageSlice,
   },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch