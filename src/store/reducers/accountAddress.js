import { SET_ADDRESS } from "../../constants";
export const accountAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        accountAddress: action.registerAddress
      };
    default:
      return state;
  }
};

export default accountAddressReducer;
