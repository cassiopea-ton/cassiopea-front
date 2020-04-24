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

export const tableBodyInfo = [
  "-1:3451..a155",
  "public",
  15,
  45,
  "5m ago",
  "5h",
  "Currency Pair",
  "mad.bet.com",
];

export const tableHeadInfo = [
  "Address",
  "Type",
  "Min. Oracles ",
  "Oracle Counter",
  "Last Update",
  "Frequency",
  "Tag",
  "Source",
];
