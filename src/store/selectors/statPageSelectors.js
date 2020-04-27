import { createSelector } from "reselect";
export const getTonClient = (state) => state.tonClient;
export const getDeserializedData = (state) => state.deserializeData;
export const getRegisterAddress = (state) => state.accountAddressReducer;

export const getTonClientSelector = createSelector(
  getTonClient,
  (client) => client
);

export const getDeserializedDataSelector = createSelector(
  getDeserializedData,
  (data) => data
);

export const getRegisterAddressSelector = createSelector(
  getRegisterAddress,
  (address) => address
);
