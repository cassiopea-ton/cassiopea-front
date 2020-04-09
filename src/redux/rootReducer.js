import {tonReducer} from './tonReducer'

import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    ton: tonReducer,
    
    
});