function findMissingLetter(arr) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const startIndex = alphabet.indexOf(arr[0]);
	for (let index = 0; index < arr.length; index++) {
		const expectedLetter = alphabet[startIndex + index];
		if (arr[index] !== expectedLetter) {
			return expectedLetter;
		}
	}
	return '';
}

module.exports = findMissingLetter;
