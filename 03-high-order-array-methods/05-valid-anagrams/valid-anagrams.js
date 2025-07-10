function validAnagrams(str1, str2) {
  return (
    str1.length === str2.length &&
    str1.split('').sort().join('') === str2.split('').sort().join('')
  );
}

module.exports = validAnagrams;
