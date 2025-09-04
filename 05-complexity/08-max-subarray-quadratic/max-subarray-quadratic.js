function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

module.exports = maxSubarraySum;
