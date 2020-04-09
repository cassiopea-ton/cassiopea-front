import { CREATE_TON } from "./types";
import { TONClient }  from "ton-client-node-js";

const initState = {
  appClient: "TON",
};
export const tonReducer = (state = initState, action) => {
  switch (action.type) {
      case CREATE_TON :
          return {...state, ...{ appClient:  new TONClient() }}
    default:
      return state;
  }
};
