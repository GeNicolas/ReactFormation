const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FLUSH_CART":
      console.log("flush");
      return { ...state, cart: initialState.cart };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          { pizzaName: action.pizzaName, pizzaPrice: action.pizzaPrice }
        ]
      };
    default:
      return state;
  }
};

export default cartReducer;
