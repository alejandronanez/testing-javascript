const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10;
  expect(result).toBe(expected);
})

test('subtract subtracts numbers', () => {
  const result = subtract(1, 1)
  const expected = 0;
  expect(result).toBe(expected);
})

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch(error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }
}

