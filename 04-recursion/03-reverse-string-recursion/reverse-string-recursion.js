function reverseString(str) {
  if (str === '') {
    return '';
  }
  return reverseString(str.slice(1)) + str.charAt(0);
}

module.exports = reverseString;
