const reverseString = require('../modules/reverseString.js');

test('Reverse', () => {
  expect(reverseString('boy')).toBe('yob');
});

test('Reverse', () => {
  expect(reverseString('father')).toBe('rehtaf');
});