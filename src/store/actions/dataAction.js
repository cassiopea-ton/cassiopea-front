import { SET_DATA } from "../../constants";

const addDeserializedData =  data => ({
  type: SET_DATA,
  payload: data,
});

export default addDeserializedData;
