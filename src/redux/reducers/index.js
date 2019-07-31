import { combineReducers } from 'redux'
import deck from './deck'
import search from './search'

export const rootReducer = combineReducers({
	deck,
	search
})
