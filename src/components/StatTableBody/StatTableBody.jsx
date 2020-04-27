import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Buffer } from 'buffer/';
import { BagOfCells } from 'cassiopeia-ton-sdk';
import './StatTableBody.scss';
import { abi, tableHeadInfo } from './dataStat'
import addDeserializedData from '../../store/actions/dataAction'
import addAccountAddress from '../../store/actions/addressAction'

const clone = require('rfdc')();

const registerAddress = "-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9";

let sourceLinks = [];
let sourceLinkArray = [];
let oracleSource = []

const goThrough = (obj) => {

  let providersObj = Object.assign({}, obj[0]);
  let oracleObj = Object.assign({}, obj[1]);
  let oracleObjResult = Object.values(oracleObj).flat();

  sourceLinks = Object.keys(oracleObj);
  console.log(oracleObjResult);
  oracleSource = Object.values(oracleObj)
  console.log(oracleSource);

  let providersObjResult = objectIterator(providersObj);
  console.log(JSON.stringify(providersObj));

  sourceLinks = Object.keys(providersObjResult).flat();
  sourceLinkArray = Object.values(providersObjResult);

  console.log([sourceLinks, sourceLinkArray, oracleObjResult]);

  return [sourceLinks, sourceLinkArray, oracleObjResult];
}

const objectIterator = (iteratedObj) => {

  let arr = Object.keys(iteratedObj).map(i => iteratedObj[i]);
  let arr1 = Object.keys(arr).map(i => arr[i]);
  let arr2 = Object.values(arr1);
  let dataLinkObjectsExample = {};

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      let dataLinkObjects = arr2[i][j];
      dataLinkObjectsExample = { ...dataLinkObjects };
    }
  }

  return dataLinkObjectsExample;
}

const objectIterator1 = (iteratedObj) => {
  let arr = Object.values(iteratedObj).map(i => iteratedObj[i]);
  return arr;
};

const tableBodyInfo = [
  registerAddress,
  "public",
  15,
  45,
  "5m ago",
  "5h",
  "Currency Pair",
  sourceLinkArray[0],
];

const element = tableHeadInfo.map((elem, i) => (
  <td key={i} data-label={elem}>
    <span>{tableBodyInfo[i]}</span>
  </td>
));

const items = Array(20).fill(element);

const StatTableBody = ({ currentClient, setData, setAccountAddres, deserializedData }) => {

  const getAccount = async (client, addr, params = ["code", "data"]) => {
    if (client) {
      return await client.queries.accounts.query(
        {
          acc_type: { eq: 1 },
          id: { eq: addr }
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
        //  - display in table
        console.log(JSON.stringify(data));
        console.log(data);
      }

      else {
        return account;
      }
    });
  };

  useEffect(() => getStorage(currentClient.tonClient));
  console.log(currentClient.tonClient);
  console.log(deserializedData);

  useEffect(() => setAccountAddres(registerAddress));
  return (<tbody>
    {items.map((i, index) => (
      <tr key={index} className="table__info alt">
        {i}
      </tr>
    ))}
  </tbody>)
};

const mapStateToProps = (state) => {
  console.log(state.deserializeData)
  console.log(state.accountAddressReducer)
  console.log(state.deserializeData)

  return {
    currentClient: state.tonClient,
    deserializedData: state.deserializeData,
    accAddress: state.accountAddressReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (info) => dispatch(addDeserializedData(info)),
    setAccountAddres: (accAddress) => dispatch(addAccountAddress(accAddress)),
  }
}

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatTableBody);

