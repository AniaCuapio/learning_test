const verifyIfEven = (number) => {
  if (number % 2 === 0) return "Even number";
};

test("El número es par", () => {
  expect(verifyIfEven(8)).toBe("Even number");
});
test("El número es impar", () => {
  expect(verifyIfEven(7)).toBe("Even number");
});
