import { TON_CLIENT_SET_DATA } from "../../constants";

const tonClient = (state = {}, action) => {
  switch (action.type) {
    case TON_CLIENT_SET_DATA:
      return {
        ...state,
        tonClient: action.payload?.client
      };
    default:
      return state;
  }
};

export default tonClient;