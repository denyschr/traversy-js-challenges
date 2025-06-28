function findFirstNonRepeatingCharacter(str) {
	const charStats = new Map();
	
	for (const char of str) {
		charStats.set(char, (charStats.get(char) || 0) + 1);
	}
	
	for (const [char, count] of charStats.entries()) {
		if (count === 1) {
			return char;
		}
	}
	
	return null;
}

module.exports = findFirstNonRepeatingCharacter;
