import React, { Component } from "react";
import Header from "../Structure/Header";
import Pizza from "./Pizza";
import Panier from "../Panier/Panier";
import { fetchPizzas } from "../services/PizzaData";
import Chargement from "../Structure/Chargement";
import ErrorBoundary from "../Structure/ErrorBoundary";
import PizzaList from "./PizzaList";
import { connect } from "react-redux";
import { addPizzas } from "./store/action";

class PizzaListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaFiltre: [],
      pizzaSelect: [],
      isErreur: false
    };
  }

  componentDidMount() {
    //this.setState({ pizzas: fetchPizzas() });
    if (this.props.pizzaList.length == 0) {
      fetchPizzas().then(pizz => {
        this.props.addPizzass(pizz);
        this.setState({ pizzaFiltre: pizz });
      });
    } else {
      this.setState({ pizzaFiltre: this.props.pizzaList });
    }
    //console.log(this.props.pizzaList)
  }

  pizzaFiltrer = event => {
    const filtre = event.target.value.toLowerCase();
    //console.log(filtre)
    const newList = this.props.pizzaList.filter(pizza => {
      return pizza.name.toLowerCase().includes(filtre);
    });
    //console.log(newList);

    this.setState({ pizzaFiltre: newList });
  };

  pizzasSelect = ({ name, price }) => {
    this.setState({
      pizzaSelect: [...this.state.pizzaSelect, { name, price }]
    });
    //console.log(this.state.pizzaSelect);
  };
  viderPanier = () => {
    this.setState({ pizzaSelect: [] });
  };

  erreur = () => {
    this.setState({ isErreur: true });
  };

  render() {
    //this.setState({pizzaData : })
    //console.log(this.state.pizzaSelect);
    console.log(this.props.pizzaList.length);
    if (this.props.pizzaList.length <= 0) {
      return <Chargement />;
    }
    return (
      <PizzaList
        pizzaFiltre={this.state.pizzaFiltre}
        pizzaSelect={this.state.pizzaSelect}
        pizzaFiltrer={this.pizzaFiltrer}
        pizzasSelect={this.pizzasSelect}
        viderPanier={this.viderPanier}
      />
    );
  }
}

const mapStateToProps = state => {
  return { pizzaList: state.pizzaListReducer.pizzaList };
};

const mapDispatchToProps = dispatch => {
  return {
    addPizzass: pizzas => dispatch(addPizzas(pizzas))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaListContainer);
