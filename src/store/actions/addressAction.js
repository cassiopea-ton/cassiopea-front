import { SET_ADDRESS } from "../../constants";

const addAccountAddress = address => ({
  type: SET_ADDRESS,
  payload: address,
});

export default addAccountAddress;
