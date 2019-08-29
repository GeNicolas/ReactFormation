export const flushCart = () => ({
  type: "FLUSH_CART"
});

export const addToCart = (pizzaName, pizzaPrice) => ({
  type: "ADD_TO_CART",
  pizzaName,
  pizzaPrice
});
