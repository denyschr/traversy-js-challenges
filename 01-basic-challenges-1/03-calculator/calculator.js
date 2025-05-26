function calculator(num1, num2, operation) {
	const operations = {
		'+': num1 + num2,
		'-': num1 - num2,
		'*': num1 * num2,
		'/': num1 / num2
	}
	return operations.hasOwnProperty(operation)
		? operations[operation]
		: (function() { throw new Error("Invalid operator") });
}

module.exports = calculator;
