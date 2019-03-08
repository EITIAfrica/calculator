'use strict';

import { Component } from 'react';
<<<<<<< HEAD
import CalculatorActions from '../actions/CalculatorActions';
=======
import calculatorActions from '../actions/calculatorActions';
>>>>>>> first commit

class Key extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHighlighted: false
    };

    // Bind callback methods to make `this` the correct context.
    this.handleClick = this.handleClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  handleClick() {
<<<<<<< HEAD
    CalculatorActions.typeKey(this.props.keyType, this.props.keyValue);
=======
    calculatorActions.typeKey(this.props.keyType, this.props.keyValue);
>>>>>>> first commit
  }

  onMouseDown() {
    this.setState({
      isHighlighted: true
    });
  }

  onMouseUp() {
    this.setState({
      isHighlighted: false
    });
  }
}

module.exports = Key;
