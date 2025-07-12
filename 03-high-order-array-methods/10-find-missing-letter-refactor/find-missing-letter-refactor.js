function findMissingLetter(arr) {
  const missingLetter = arr.find((char, index, theArr) => {
    const nextChar = theArr[index + 1];
    return nextChar && nextChar.charCodeAt(0) - char.charCodeAt(0) > 1;
  });
  return missingLetter
    ? String.fromCharCode(missingLetter.charCodeAt(0) + 1)
    : '';
}

module.exports = findMissingLetter;
