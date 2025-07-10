const isValidIPv4 = (input) => {
  const octets = input.split('.');
  if (octets.length !== 4) {
    return false;
  }
  return octets.every(
    (octet) => !/^0\d+$/.test(octet) && +octet >= 0 && +octet <= 255
  );
};

module.exports = isValidIPv4;
