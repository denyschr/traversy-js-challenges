function titleCase(str) {
	return str
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
		.join(' ');
}

module.exports = titleCase;
