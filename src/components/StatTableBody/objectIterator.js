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


  export default objectIterator;