import { SET_ADDRESS } from "../../constants";

const addAccountAddress = accountAddress => ({
  type: SET_ADDRESS,
  payload: accountAddress,
});

export default addAccountAddress;
