import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Buffer } from 'buffer/'
import { BagOfCells } from 'cassiopeia-ton-sdk'
import './StatTableBody.scss'
import { abi } from './registerAbi'
import { tableHeadInfo } from './tableHeadInfo'
import addDeserializedData from '../../store/actions/dataAction'
import { getTonClientSelector, getDeserializedDataSelector, getRegisterAddressSelector, getRegisterAddress } from '../../store/selectors/statPageSelectors'

const StatTableBody = ({ currentClient, addDeserializedData, registerAddress, deserializedData }) => {

  const getData = async (client, addr, params = ["code", "data"]) => {
    if (client && Object.keys(registerAddress).length) {
      let account = await client.queries.accounts.query(
        {
          acc_type: { eq: 1 },
          id: { eq: addr }
        },
        params.join(" ")
      );
      let buffer = Buffer.from(account[0].data, "base64");
      let c = new BagOfCells(buffer);
      let data = c.cellDataSlice[0].deserialize(abi);
      return addDeserializedData(data);
    }
    return null;
  };

  useEffect(() => {
    setTimeout(getData, 6000, currentClient.tonClient, registerAddress)
  });

  let items = []
  if (deserializedData.contractData) {
    let contractData = deserializedData.contractData;
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
          parseInt(info[4] / 86400000).toString() + " days",
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
  let address = getRegisterAddress(state);
  return {
    currentClient: getTonClientSelector(state),
    deserializedData: getDeserializedDataSelector(state),
    registerAddress: getRegisterAddressSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ addDeserializedData }, dispatch)

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
  DataDeserializedData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(StatTableBody);
