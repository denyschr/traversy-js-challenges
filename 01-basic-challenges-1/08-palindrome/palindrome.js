function isPalindrome(str) {
	const formatted = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	const reversed = formatted.split('').reverse().join('');
	return formatted === reversed;
}

module.exports = isPalindrome;
