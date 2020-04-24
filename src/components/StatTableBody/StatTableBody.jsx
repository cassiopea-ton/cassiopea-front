import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Buffer } from 'buffer/';
import { BagOfCells } from 'cassiopeia-ton-sdk';
import './StatTableBody.scss';
import { abi, tableBodyInfo, tableHeadInfo } from './dataStat'

const element = tableHeadInfo.map((elem, i) => (
  <td key={i} data-label={elem}>
    {tableBodyInfo[i]}
  </td>
));

const items = Array(20).fill(element);
const registerAddress = "-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9";
const StatTableBody = ({ currentClient }) => {
  let [data, setData] = useState(null);
  setData = (serializedData) => {
    data = serializedData;
  }

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
        console.log(JSON.stringify(data));
        setData(data);
        console.log(data.flat());
      }
      else {
        return account;
      }
    });
  };
  useEffect(() => getStorage(currentClient.tonClient));
  console.log(currentClient.tonClient);
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
  console.log();
  return {
    currentClient: state.tonClient,
  };
};

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
};


export default connect(mapStateToProps, null)(StatTableBody);

