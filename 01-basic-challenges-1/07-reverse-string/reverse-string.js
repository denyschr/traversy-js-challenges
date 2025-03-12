function reverseString(str) {
	const reversed = str.split('');
	for (let index = 0; index < reversed.length / 2; index++) {
		const temp = reversed[index];
		reversed[index] = reversed[reversed.length - index - 1];
		reversed[reversed.length - index - 1] = temp;
	}
	return reversed.join('');
}

module.exports = reverseString;
