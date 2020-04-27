import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Buffer } from 'buffer/'
import { BagOfCells } from 'cassiopeia-ton-sdk'
import './StatTableBody.scss'
import { abi, tableHeadInfo } from './dataStat'
import addDeserializedData from '../../store/actions/dataAction'
import addAccountAddress from '../../store/actions/addressAction'
import goThrough from './goThrough'
import store from '../../store/index'
import * as actions from '../../store/actions/index'
import * as selector from '../../store/selectors/statPageSelectors'

let sourceLinks = [];
let sourceLinkArray = [];
let oracleSource = []
store.dispatch(addAccountAddress("-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9"));
let storage = store.getState();
let registerAddress = (storage.accountAddressReducer.accountAddress);

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

  console.log(currentClient.tonClient);
  console.log(deserializedData);

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
    currentClient: selector.getTonClientSelector,
    deserializedData: selector.getDeserializedDataSelector,
    registerAddress: selector.getRegisterAddressSelector,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { addDeserializedData } = bindActionCreators(actions, dispatch)
}

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatTableBody);

