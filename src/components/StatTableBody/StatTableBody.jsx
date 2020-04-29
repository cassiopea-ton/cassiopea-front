import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Buffer } from 'buffer/'
import { BagOfCells } from 'cassiopeia-ton-sdk'
import './StatTableBody.scss'
import { abi, tableHeadInfo } from './dataStat'
import goThrough from './goThrough'
import { registerAddress } from './dataStat'
import addDeserializedData from '../../store/actions/dataAction'
import { getTonClientSelector, getDeserializedDataSelector, getRegisterAddressSelector } from '../../store/selectors/statPageSelectors'

const StatTableBody = ({ currentClient, addDeserializedData, deserializedData }) => {

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
        return data;
      }

      else {
        return account;
      }
    }).then(a => addDeserializedData(a));
  };

  useEffect(() => {
    setTimeout(getStorage, 6000, currentClient.tonClient)
  });

  let items = []
  let data = deserializedData;
  if (data.contractData) {
    let contractData = data.contractData;
    let tableBodyInfo = []
    Object.entries(contractData[0]).forEach((typeInfo) => {
      let type = typeInfo[0]
      typeInfo[1].forEach((provider) =>
        Object.entries(provider).forEach((entry) => {
          let source = entry[0]
          let info = entry[1]
          tableBodyInfo.push([info[0] + ":" + info[1],
          type === "0" ? "public" : "private",
          info[2],
          info[3],
          parseInt(info[4]/86400000).toString()+" days",
            source
          ])
        }))
    })

    items = tableBodyInfo.map((entry) => tableHeadInfo.map((elem, i) => (
      <td key={i} data-label={elem}>
        <span>{entry[i]}</span>
      </td>
    )));
  }

  return (<tbody>
    {items.map((i, index) => (
      <tr key={index} className="table__info alt">
        {i}
      </tr>
    ))}
  </tbody>)
};

const mapStateToProps = (state) => {
  return {
    currentClient: getTonClientSelector(state),
    deserializedData: getDeserializedDataSelector(state),
    registerAddress: getRegisterAddressSelector(state),
  };
};

const mapDispatchToProps = (dispatch) =>  bindActionCreators({ addDeserializedData }, dispatch)

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
  DataDeserializedData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(StatTableBody);
