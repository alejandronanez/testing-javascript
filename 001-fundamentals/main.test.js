// run me using npx jest
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

test('sum adds numbers', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10;
  expect(result).toBe(expected);
})

test('subtract subtracts numbers', async () => {
  const result =  await subtractAsync(1, 1)
  const expected = 0;
  expect(result).toBe(expected);
})
