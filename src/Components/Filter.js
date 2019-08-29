import React, { Component } from "react";

class Filter extends Component {
  filtrer(event) {
    const filtre = event.target.value;
    //console.log(filtre);
    const newList = this.props.listPizza.filter(pizza => {
      this.props.listPizza = pizza.name.includes(filtre);
    });
    console.log(newList);

    this.props.pizzaFiltrer(newList);
  }

  render() {
    //console.log(this.filtrer("Reine"));
    return (
      <div className="filter-container">
        <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
        <div className="field">
          <label className="label">Filtrer: </label>
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="nom de la pizza"
              onChange={event => this.filtrer(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
