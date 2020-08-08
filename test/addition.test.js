const addition = (a, b) => {
  return a + b;
};

test("Los números son iguales", () => {
  expect(addition(4, 2)).toBe(6);
});

test("Los números son iguales", () => {
  expect(addition(4, 4)).toBe(8);
});
