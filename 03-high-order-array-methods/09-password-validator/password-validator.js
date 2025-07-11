function validatePassword(password) {
  const hasEnoughLength = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  return hasEnoughLength && hasLowercase && hasUppercase && hasDigit;
}

module.exports = validatePassword;
