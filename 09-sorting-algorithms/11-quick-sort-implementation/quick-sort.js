function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.at(-1);
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    element < pivot ? left.push(element) : right.push(element);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
