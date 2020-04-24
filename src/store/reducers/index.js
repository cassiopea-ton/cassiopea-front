/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-named-as-default-member
import tonClient from './tonClient';
import deserializeData from './deserializeData'


const reducers = { tonClient, deserializeData };

export const rootReducer = combineReducers(reducers);

export default rootReducer;
