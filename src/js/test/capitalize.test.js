const capitalise = require('../modules/capitalize.js');

test('Capitalize', () => {
  expect(capitalise('john')).toBe('John');
});