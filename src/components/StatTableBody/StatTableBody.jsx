/* eslint-disable react/no-array-index-key */
import React from 'react';
import './StatTableBody.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Buffer } from 'buffer/';
import { BagOfCells } from 'cassiopeia-ton-sdk';
import { useEffect } from 'react';

const tableBodyInfo = [
  '-1:3451..a155',
  'public',
  15,
  45,
  '5m ago',
  '5h',
  'Currency Pair',
  'mad.bet.com',
];

const tableHeadInfo = [
  'Address',
  'Type',
  'Min. Oracles ',
  'Oracle Counter',
  'Last Update',
  'Frequency',
  'Tag',
  'Source',
];

const element = tableHeadInfo.map((elem, i) => (
  <td key={i} data-label={elem}>
    {tableBodyInfo[i]}
  </td>
));

const abi = [
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
          { type: "uint", size: 32 }
        ]
      }
    ]
  },
  {
    type: "dict",
    key: { type: "uint", size: 256 },
    value: [
      { type: "uint", size: 32 },
      { type: "int", size: 32 },
      { type: "uint", size: 32 },
      { type: "grams" },
      { type: "uint", size: 32 }
    ]
  }
];

const items = Array(20).fill(element);
const registerAddress = "-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9";
const StatTableBody = (props) => {
  const { tonClient } = props;

  const getAccount = async (client, addr, params = ["code", "data"]) => {
    if (client) {
      return await client.queries.accounts.query(
        {
          acc_type: { eq: 1 },
          id: {
            eq: addr
          }
        },
        params.join(" ")
      );
    }
    return null;
  };
  const getStorage = (client) => {
    getAccount(client, registerAddress).then((account) => {
      if (account) {
        let buffer = Buffer.from(account[0].data, "base64");
        let c = new BagOfCells(buffer);
        let data = c.cellDataSlice[0].deserialize(abi);
        // TODO:
        //  - store data to component state
        //  - display in table
        //  - store registerAddress in storage and get it with mapStateToProps
        //  - optimize mapStateToProps, `tonClient.tonClient.tonClient` is not the best way to get instance
        console.log(JSON.stringify(data));
      }
      else {
        return account;
      }
    });


  };
  useEffect(() => getStorage(tonClient.tonClient.tonClient));
  return (<tbody>
    {items.map((i, index) => (
      <tr key={index} className="table__info alt">
        {i}
      </tr>
    ))}
  </tbody>)
};


const mapStateToProps = (state) => {
  console.log("state");
  console.log(state);
  return {
    tonClient: state,
  };
};

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
};


export default connect(mapStateToProps, null)(StatTableBody);
