const verifyIfMultiple = (a, b) => {
  if (a % b === 0) return `El número ${b} es múltiplo de ${a}`;
};
test("Verificar si es múltiplo", () => {
  expect(verifyIfMultiple(5, 15)).toBe("El número 15 es múltiplo de 5");
});

test("Verificar si es múltiplo", () => {
  expect(verifyIfMultiple(5, 13)).toBe("El número 13 es múltiplo de 5");
});
