import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducers as cart } from './Cart.store';

const rootReducer = combineReducers({
  cart
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default store;