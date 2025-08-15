function flattenArray(arr) {
  const isArray = Array.isArray;
  let newArr = [];

  arr.forEach((el) => {
    isArray(el) ? (newArr = newArr.concat(flattenArray(el))) : newArr.push(el);
  });

  return newArr;
}

module.exports = flattenArray;
