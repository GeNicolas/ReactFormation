import React, { Component } from "react";
import { connect } from "react-redux";
import { flushCart } from "./store/action";

export class Panier extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <h2 class="title is-h2">Mon Panier</h2>
        <ul>
          {this.props.carto !== undefined &&
            this.props.carto.map((item, id) => (
              <li key={id}>{item.pizzaName}</li>
            ))}
        </ul>
        <hr />
        <p>
          <b>
            {this.props.carto !== undefined &&
              `Total: ${this.props.carto.reduce(
                (acc, item) => acc + item.pizzaPrice,
                0
              )} €`}
          </b>
        </p>
        <br />
        <button class="button is-warning" onClick={this.props.cartViderPanier}>
          Vider le panier
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  //console.log(state);
  return {
    carto: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cartViderPanier: () => dispatch(flushCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panier);
