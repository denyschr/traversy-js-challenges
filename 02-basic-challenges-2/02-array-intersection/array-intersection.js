function arrayIntersection(arr1, arr2) {
	return [...new Set(arr1.filter((item) => arr2.includes(item)))];
}

module.exports = arrayIntersection;
