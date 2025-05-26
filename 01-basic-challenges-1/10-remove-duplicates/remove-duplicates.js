function removeDuplicates(arr) {
	const seenItems = new Map();
	return arr.filter((item) => seenItems.has(item) ? false : seenItems.set(item, true));
}

module.exports = removeDuplicates;
