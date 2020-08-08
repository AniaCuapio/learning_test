const verifyIfOdd = (number) => {
  if (number % 2 === 1) return "Odd number";
};

test("El número es non", () => {
  expect(verifyIfOdd(7)).toBe("Odd number");
});
test("El número es non", () => {
  expect(verifyIfOdd(8)).toBe("Odd number");
});
