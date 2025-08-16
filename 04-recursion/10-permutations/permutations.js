function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(char + subPermutations[j]);
    }
  }

  return result;
}

module.exports = permutations;
