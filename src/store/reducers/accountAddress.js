import { SET_ADDRESS } from "../../constants";
export const accountAddressReducer = (state = {accountAddress: "-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9"}, action) => {
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
