function fizzBuzzArray(num) {
	return Array.from({ length: num }, (_, index) => {
		const n = index + 1;
		if (n % 3 === 0 && n % 5 === 0) {
			return 'FizzBuzz';
		} else if (n % 3 === 0) {
			return 'Fizz';
		} else if (n % 5 === 0) {
			return 'Buzz';
		} else {
			return n;
		}
	});
}

module.exports = fizzBuzzArray;
