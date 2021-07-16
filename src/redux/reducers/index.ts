import { combineReducers } from 'redux';
import { reducers as cartReducers } from "./cart";

export const reducers = combineReducers({ cartReducers })
