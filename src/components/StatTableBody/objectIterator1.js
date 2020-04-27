const objectIterator1 = (iteratedObj) => {
  let arr = Object.values(iteratedObj).map(i => iteratedObj[i]);
  return arr;
};
