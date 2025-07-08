function highestScoringWord(str) {
  return str.split(' ').reduce(
    (highest, word) => {
      const scores = word
        .split('')
        .reduce((sum, char) => (sum += char.charCodeAt(0) - 96), 0);

      if (scores > highest.scores) {
        highest.word = word;
        highest.scores = scores;
      }

      return highest;
    },
    { word: null, scores: 0 }
  ).word;
}

module.exports = highestScoringWord;
