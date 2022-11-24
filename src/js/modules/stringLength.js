const stringLength = (string) => {
  if (string.length > 0 && string.length < 11) {
    return string.length;
  }

  throw new Error('String is too short');
};

module.exports = stringLength;