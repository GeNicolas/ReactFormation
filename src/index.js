import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";
import "./assets/styles.scss";
import Header from "./Structure/Header";
import Home from "./Structure/Home";
import PizzaListContainer from "./Pizza/PizzaListContainer";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import NotFound from "./Structure/NotFound";
import PizzaDetails from "./Pizza/PizzaDetails";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizzas" component={PizzaListContainer} />
        <Route path="/pizza/:name/:desc/:price" component={PizzaDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
