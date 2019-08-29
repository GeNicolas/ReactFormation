import React, { Component } from "react";
import Header from "./Header";
import Panier from "../Panier/Panier";

class Chargement extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="column is-10-desktop is-12-tablet">
          <h1 class="title is-h1 has-text-centered is-italic">
            Chargement des pizzas...
          </h1>
          <progress class="progress is-large is-primary" max="100">
            60%
          </progress>
        </div>
        <Panier />
      </>
    );
  }
}

export default Chargement;
