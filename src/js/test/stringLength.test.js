const stringLength = require('../modules/stringLength.js');

test('Length', () => {
  expect(stringLength('boy')).toBe(3);
});
