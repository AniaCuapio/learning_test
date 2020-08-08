const substraction = (a, b) => {
  return a - b;
};

test("La resta de los números es correcta", () => {
  expect(substraction(8, 4)).toBe(4);
});

test("La resta de los números es correcta", () => {
  expect(substraction(6, 2)).toBe(4);
});
