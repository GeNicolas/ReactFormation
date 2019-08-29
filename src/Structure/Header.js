import React, { Component } from "react";
import Logo from "../assets/Pizza-Yolo.png";
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <nav className="is-primary navbar">
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            exact
            to="/"
            activeClassName="selected"
          >
            <img src={Logo} alt="PizzaYolo logo" />
          </NavLink>
          <button
            className="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              exact
              to="/"
              activeClassName="selected"
            >
              Accueil
            </NavLink>
            <NavLink
              className="navbar-item"
              exact
              to="/pizzas"
              activeClassName="selected"
            >
              Nos pizzas
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
