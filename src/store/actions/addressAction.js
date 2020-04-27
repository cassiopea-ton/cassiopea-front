import { SET_ADDRESS } from "../../constants";


const addAccountAddress = (registerAddress) => ({
  type: SET_ADDRESS,
   registerAddress,

});

export default addAccountAddress;
