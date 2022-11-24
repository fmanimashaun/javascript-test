const reverseString = (string) => {
  if (string.length > 0) {
    return string.split('').reverse().join('');
  }
  throw new Error('String is too short');
}
module.exports = reverseString;
