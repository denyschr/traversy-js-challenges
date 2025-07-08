function validateEmail(email) {
  return /^[a-z0-9+._-]+@[a-z.-]+\.[a-z]{2,3}$/i.test(email);
}

module.exports = validateEmail;
