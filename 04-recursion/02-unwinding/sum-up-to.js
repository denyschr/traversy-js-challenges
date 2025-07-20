function sumUpTo(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sumUpTo(n - 1);
  }
}

module.exports = sumUpTo;
