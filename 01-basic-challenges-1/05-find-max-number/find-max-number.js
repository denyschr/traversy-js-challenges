function findMaxNumber(arr) {
	return arr.reduce((acc, currentValue) => currentValue > acc ? currentValue : acc);
}

module.exports = findMaxNumber;
