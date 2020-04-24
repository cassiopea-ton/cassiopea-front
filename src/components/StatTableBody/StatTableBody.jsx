import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Buffer } from 'buffer/';
import { BagOfCells } from 'cassiopeia-ton-sdk';
import './StatTableBody.scss';
import { abi, tableHeadInfo } from './dataStat'
import addDeserializedData from '../../store/actions/dataAction'
import addAccountAddress from '../../store/actions/addressAction'

const registerAddress = "-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9";


const goThrough = (obj) => {
  let providersObj = {};
  let oracleObj = {};
  for (const item in obj) {
    providersObj = Object.assign({}, obj[0]);
    oracleObj = Object.assign({}, obj[1]);
  }
  console.log('providers')
  console.log(providersObj);
  console.log('oracle')
  console.log(oracleObj);

  objectIterator(providersObj);
  objectIterator1(oracleObj);
}

// const objectIterator = (iteratedObj) => {
//   let res = [];
//   Object.keys(iteratedObj).map(function (key) {
//     if (key > 0) {
//       /* global BigInt */
//       console.log([BigInt(key), iteratedObj[key]])
//     }
//     else {
//       console.log([Number(key), iteratedObj[key]])
//     }
//   });

let links = [];
const objectIterator = (iteratedObj) => {
  let arr = Object.keys(iteratedObj).map(i => iteratedObj[i]);
  let arr1 = Object.keys(arr).map(i => arr[i]);
  let arr2 = Object.values(arr1);
  let coinbaseArray = [];
  let exampleArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      let dataLinkObjects = arr2[i][j];
      console.log(dataLinkObjects)
         links = Object.keys(dataLinkObjects);
      console.log(JSON.parse(JSON.stringify(links)))
      // dataLinkObjects.forEach(function (linkObject, index) {
      //   console.log(index);
      //   console.log(linkObject);
      // });
    }
    console.log(coinbaseArray); // object

    //  let arr2 = (Object.entries(arr1));  //=== ["0", Array(1)]
    //   console.log(Object.values(arr2));

  }
};



const objectIterator1 = (iteratedObj) => {
  let arr = Object.values(iteratedObj).map(i => iteratedObj[i]);
  arr.map(x => console.log(x));
};

const tableBodyInfo = [
  registerAddress,
  "public",
  15,
  45,
  "5m ago",
  "5h",
  "Currency Pair",
  links[0],
];
console.log(links)
// "mad.bet.com"
const element = tableHeadInfo.map((elem, i) => (
  <td key={i} data-label={elem}>
    <span>{tableBodyInfo[i]}</span>
  </td>
));


// console.log( iteratedObj[i]);
// }
// const goThrough = (obj) => {
//   let providersObj = {};
//   let oracleObj = {};
//   for (const item in obj) {
//     console.log(`typeof obj:${typeof Object.values(obj[item])}`);
//     console.log(`  ${item}: ${JSON.stringify(Object.values(obj[item]))}`);
//   }
// }


const items = Array(20).fill(element);

const StatTableBody = ({ currentClient, setData, setAccountAddres }) => {

  setAccountAddres(registerAddress);

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
        console.log(`data keys \n ${goThrough(data)}`)
        console.log(data.flat());
        setData(data);
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
  console.log(state.deserializeData);
  return {
    currentClient: state.tonClient,
    deserializedData: state.contractData,
    accAddress: state.accountAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(addDeserializedData(data)),
    setAccountAddres: (accAddres) => dispatch(addAccountAddress(accAddres)),
  }
}

StatTableBody.propTypes = {
  tonClient: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatTableBody);

// [
//   {
//     "0": [
//       {
//         "api.pro.coinbase.com/products/BTC-USD/stats\u0000": [
//           "255",
//           "79131962472955613111775533705234716920789278840720323144427443931091911552502",
//           "100",
//           0,
//           "1593648073"
//         ],
//         "example.com\u0000": [
//           "255",
//           "14644700152385157196097952211346199641940819870959158775473061704731123425432",
//           "100",
//           0,
//           "1593648086"
//         ]
//       }
//     ]
//   },
//   {
//     "112462105348778249932793015892144426282003572374241530499119207627443716810222": [
//       "1585884923",
//       "100",
//       "30000",
//       0,
//       "200000500"
//     ]
//   }
// ]