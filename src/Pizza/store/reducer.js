import pizzas from "../../services/pizzas.json";

const initialState = {
  pizzaList: []
};

const pizzaListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDPIZZAS":
      return { ...state.pizzaList, pizzaList: action.pizza };
    default:
      return state;
  }
};

export default pizzaListReducer;
