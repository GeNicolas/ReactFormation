import { addPizzas } from "../action";

it("return add pizza action", () => {
  expect(addPizzas()).toEqual({ type: "ADDPIZZAS" });
});

it("return add pizza", () => {
  const dataTest = [
    { name: "test1", price: 10 },
    { name: "test2", price: 100 }
  ];
  expect(addPizzas(dataTest)).toEqual({
    type: "ADDPIZZAS",
    pizza: dataTest
  });
});
