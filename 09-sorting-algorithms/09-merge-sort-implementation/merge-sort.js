function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = (rightIndex = 0);

  while (leftIndex < left.length && rightIndex < right.length) {
    left[leftIndex] < right[rightIndex]
      ? merged.push(left[leftIndex++])
      : merged.push(right[rightIndex++]);
  }

  return [...merged, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

module.exports = mergeSort;
