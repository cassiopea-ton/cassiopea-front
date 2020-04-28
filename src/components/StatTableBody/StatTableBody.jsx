import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Buffer } from 'buffer/'
import { BagOfCells } from 'cassiopeia-ton-sdk'
import './StatTableBody.scss'
import { abi, tableHeadInfo } from './dataStat'
import goThrough from './goThrough'
import { tableBodyInfo, registerAddress } from './dataStat'
import addDeserializedData from '../../store/actions/dataAction'
import { getTonClientSelector, getDeserializedDataSelector, getRegisterAddressSelector } from '../../store/selectors/statPageSelectors'



const element = tableHeadInfo.map((elem, i) => (
  <td key={i} data-label={elem}>
    <span>{tableBodyInfo[i]}</span>
  </td>
));

const items = Array(20).fill(element);

const StatTableBody = ({ currentClient, addDeserializeData, deserializedData }) => {

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

  const getAccountAlternative = async (client, addr, params = ["code", "data"]) => {
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

  const getStorageAlternative = (client) => {
     getAccountAlternative(client, registerAddress).then((account) => {
      if (account) {
        let buffer = Buffer.from(account[0].data, "base64");
        let c = new BagOfCells(buffer);
        let data = c.cellDataSlice[0].deserialize(abi);
        return data;
      }

      else {
        return account;
      }
    }).then(a=> addDeserializeData(a));
  };

  useEffect(() => {
    setTimeout(getStorageAlternative, 6000, currentClient.tonClient)
  });```


  return (<tbody>
    {items.map((i, index) => (
      <tr key={index} className="table__info alt">
        {i}
      </tr>
    ))}
  </tbody>)
};

const mapStateToProps = (state) => {
  // console.log(state.getDeserializedDataSelector)
  // console.log(state.accountAddressReducer)
  // console.log(state.deserializeData)

  return {
    currentClient: getTonClientSelector(state),
    deserializedData: getDeserializedDataSelector(state),
    registerAddress: getRegisterAddressSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDeserializeData: data => dispatch(addDeserializedData(data))
  }
}

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatTableBody);
