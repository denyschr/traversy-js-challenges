function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(?<=^|\s)[a-z]/gi, (match) => match.toUpperCase());
}

module.exports = titleCase;
