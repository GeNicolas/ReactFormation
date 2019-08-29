import { createStore } from "redux";
import rootReducer from "./rootReducer";

const loadedState = () => {
  const state = localStorage.getItem("pizzaYolo");
  if (state === null) {
    return undefined;
  }

  return JSON.parse(state);
};

const saveState = state => {
  const jsonState = JSON.stringify(state);
  localStorage.setItem("pizzaYolo", jsonState);
};

const preLoadedState = loadedState();

const store = createStore(
  rootReducer,
  preLoadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
