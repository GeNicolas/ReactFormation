import React, { Component } from "react";
import Header from "../Structure/Header";
import Pizza from "./Pizza";
import Panier from "../Panier/Panier";
import ErrorBoundary from "../Structure/ErrorBoundary";
import Erreur from "../Structure/Erreur";
import PropTypes from "prop-types";

export default function PizzaList({
  pizzaFiltre,
  pizzaSelect,
  pizzaFiltrer,
  pizzasSelect,
  viderPanier
}) {
  //console.log(pizzaSelect);
  const test = pizzaSelect;
  //console.log(test);
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Erreur />
        <section class="section main-container">
          <div class="container">
            <div className="filter-container">
              <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
              <div className="field">
                <label className="label">Filtrer: </label>
                <div className="control">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="nom de la pizza"
                    onChange={event => pizzaFiltrer(event)}
                  />
                </div>
              </div>
            </div>
            <article class="message is-success">
              <div class="message-body">
                {pizzaFiltre.length} pizzas sélectionnées
              </div>
            </article>

            <div class="columns is-multiline">
              <div class="column is-10-desktop is-12-tablet">
                <div class="columns is-multiline">
                  {pizzaFiltre.map(elem => {
                    return (
                      <div class="column is-4-desktop is-6-tablet">
                        <Pizza
                          name={elem.name}
                          desc={elem.desc}
                          price={elem.price}
                          ajouter={pizzasSelect}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="column is-2-desktop is-12-tablet">
                <Panier />
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    </>
  );
}

PizzaList.propTypes = {
  pizzaFiltre: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ),
  pizzaSelect: PropTypes.array,
  pizzaFiltrer: PropTypes.function,
  pizzasSelect: PropTypes.function
};
