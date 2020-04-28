
import objectIterator from './objectIterator'
const goThrough = (obj) => {
    obj = Object.values(obj);
    console.log(obj)
    let providersObj = Object.assign({}, obj[0]);
    let oracleObj = Object.assign({}, obj[1]);
    let oracleObjResult = Object.values(oracleObj).flat();
  
   let sourceLinks = Object.keys(oracleObj);
   let oracleSource = Object.values(oracleObj)
    console.log(oracleSource);
  
    let providersObjResult = objectIterator(providersObj);
    console.log(JSON.stringify(providersObj));
  
    sourceLinks = Object.keys(providersObjResult).flat();
   let sourceLinkArray = Object.values(providersObjResult);
  
    console.log([sourceLinks, sourceLinkArray, oracleObjResult]);
  
    return [sourceLinks, sourceLinkArray, oracleObjResult];
  }

  export default goThrough;