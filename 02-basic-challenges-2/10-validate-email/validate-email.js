function validateEmail(email) {
  return /^[a-zA-Z0-9+._-]+@[a-zA-Z.-]+\.[a-z]{2,3}$/g.test(email);
}

module.exports = validateEmail;
