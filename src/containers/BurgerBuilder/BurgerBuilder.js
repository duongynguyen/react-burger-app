import React, { Component } from "react";
import Aux from "./../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 1,
      meat: 2,
      bacon: 2
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;