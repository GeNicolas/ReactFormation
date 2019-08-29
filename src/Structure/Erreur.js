import React, { Component } from "react";

export default class ErrorButton extends Component {
  constructor(props) {
    super(props);
    this.state = { showError: false };
  }

  handleClick = () => {
    this.setState({ showError: true });
  };

  render() {
    if (this.state.showError) {
      throw new Error("Oh non ! vous avez cliqué sur un bouton !!");
    }

    return <button onClick={this.handleClick}>Cliques-moi :)</button>;
  }
}
