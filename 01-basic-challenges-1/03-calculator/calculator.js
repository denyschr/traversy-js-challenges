function calculator(num1, num2, operator) {
	const operations = {
		'+': num1 + num2,
		'-': num1 - num2,
		'*': num1 * num2,
		'/': num1 / num2
	}
	return operations[operator]
		? operations[operator]
		: (function() { throw new Error("Invalid operator") });
}

module.exports = calculator;
