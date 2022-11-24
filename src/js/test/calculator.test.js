const Calculator = require('../modules/calculator.js');

describe('Calculator', () => {
  test('add', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('subtract', () => {
    expect(Calculator.subtract(3, 2)).toBe(1);
  });

  test('multiply', () => {
    expect(Calculator.multiply(4, 4)).toBe(16);
  });

  test('divide', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
  });
});
