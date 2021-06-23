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

async function test(title, callback) {
  try {
    await callback();
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

