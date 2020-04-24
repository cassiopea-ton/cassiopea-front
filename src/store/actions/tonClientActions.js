
import {TON_CLIENT_SET_DATA, TON_CLIENT_REQUEST_DATA} from '../../constants';



export const tonClientRequestData = () => ({
    type: TON_CLIENT_REQUEST_DATA
});
  
export const tonClientSetData = client => ({
    type: TON_CLIENT_SET_DATA,
    payload:  {client} ,
});
  