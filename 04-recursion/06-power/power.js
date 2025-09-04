function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = power(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = power(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}

module.exports = power;
