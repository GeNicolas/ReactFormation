import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addToCart } from "../Panier/store/action";
import { connect } from "react-redux";

class Pizza extends Component {
  render() {
    return (
      <div class="pizza-link">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <div class="columns">
                  <div class="column is-9">
                    <Link
                      to={`pizza/${this.props.name}/${this.props.desc}/${
                        this.props.price
                      }`}
                    >
                      {this.props.name}
                    </Link>
                  </div>
                  <div class="column is-3">
                    <p class="title is-4 has-text-primary">
                      {this.props.price} $
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content">{this.props.desc}</div>
            <button
              type="button"
              class="button is-primary is-small is-rounded"
              onClick={() =>
                this.props.addPizzaToCart(this.props.name, this.props.price)
              }
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Pizza.defaultProps = {
  price: 0
};

Pizza.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => ({
  addPizzaToCart: (pizzaName, pizzaPrice) =>
    dispatch(addToCart(pizzaName, pizzaPrice)) // dispatch shortcut mapping
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pizza);
