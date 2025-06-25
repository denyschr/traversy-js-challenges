function areAllCharactersUnique(str) {
	if (str === '') {
		return true;
	}
	
	const uniqueChars = new Set();
	for (const char of str) {
		if (uniqueChars.has(char)) {
			return false;
		} else {
			uniqueChars.add(char);
		}
	}
	
	return true;
}

module.exports = areAllCharactersUnique;
