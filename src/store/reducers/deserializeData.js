import { SET_DATA } from "../../constants";

export const deserializeData = (state = {}, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        contractData: action.payload,
      };
    default:
      return state;
  }
};

export default deserializeData;
