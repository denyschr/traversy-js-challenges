function generateHashtag(str) {
  if (str.trim() === '') {
    return false;
  }

  const hashtag = `#${str
    .replace(/\b[a-z]/g, (char) => char.toUpperCase())
    .replace(/\s+/g, '')}`;

  return hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
