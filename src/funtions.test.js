const funtions = require('./funtions');

test('add 2 + 2 to 4', () => {
  expect(
    funtions.sum(2, 2)
  ).toBe(4);
});

test('should be null', () => {
  expect(
    funtions.isNull()
  ).toBeNull();
});