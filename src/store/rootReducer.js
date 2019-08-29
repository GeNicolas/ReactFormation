import { combineReducers } from "redux";

import cartReducer from "../Panier/store/reducer";
import pizzaListReducer from "../Pizza/store/reducer";

const rootReducer = combineReducers({
  cartReducer,
  pizzaListReducer
});

export default rootReducer;
