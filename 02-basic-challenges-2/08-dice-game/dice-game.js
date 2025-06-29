function diceGameSimulation(numSimulations) {
  const rollDice = () => Math.floor(Math.random() * 6) + 1;
  const winSums = [7, 11];
  const loseSums = [2, 3, 12];

  return Array.from({ length: numSimulations }, () => {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    const result = winSums.includes(sum)
      ? 'win'
      : loseSums.includes(sum)
      ? 'lose'
      : 'roll again';

    return {
      dice1,
      dice2,
      sum,
      result
    };
  });
}

module.exports = diceGameSimulation;
