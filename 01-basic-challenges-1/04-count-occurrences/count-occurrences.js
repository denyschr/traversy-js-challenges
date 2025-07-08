function countOccurrences(str, char) {
  return str.match(new RegExp(char, 'g'))?.length ?? 0;
}

module.exports = countOccurrences;
