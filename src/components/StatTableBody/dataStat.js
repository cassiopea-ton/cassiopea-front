import store from '../../store/index'
import addAccountAddress from '../../store/actions/addressAction'

export const abi = [
  {
    type: "dict",
    key: { type: "uint", size: 8 },
    value: [
      {
        type: "prxdict",
        key: { type: "string", size: 1023 },
        value: [
          { type: "int", size: 8 },
          { type: "uint", size: 256 },
          { type: "uint", size: 32 },
          { type: "grams" },
          { type: "uint", size: 32 },
        ],
      },
    ],
  },
  {
    type: "dict",
    key: { type: "uint", size: 256 },
    value: [
      { type: "uint", size: 32 },
      { type: "int", size: 32 },
      { type: "uint", size: 32 },
      { type: "grams" },
      { type: "uint", size: 32 },
    ],
  },
];

export const tableHeadInfo = [
  "Address",
  "Type",
  "Price ",
  "Total reward",
  "Valid During",
  "Source",
];

store.dispatch(addAccountAddress("-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9"));
let storage = store.getState();
export let registerAddress = (storage.accountAddressReducer.accountAddress);

export const tableBodyInfo = [
  registerAddress,
  "public",
  15,
  45,
  "5m ago",
  "5h",
  "Currency Pair",
  null,
];
