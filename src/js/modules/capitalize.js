const capitalize = (string) => {
  if (string.length > 0) {
    return string[0].toUpperCase() + string.slice(1);
  }
  throw new Error('String is too short');
};

module.exports = capitalize;