'use strict';

import { Component } from 'react';
<<<<<<< HEAD
import CalculatorStore from '../stores/CalculatorStore';

function getCalculatorState() {
  return {
    displayScreen: CalculatorStore.getDisplayScreen()
=======
import calculatorStore from '../stores/calculatorStore';

function getcalculatorState() {
  return {
    displayScreen: calculatorStore.getDisplayScreen()
>>>>>>> first commit
  };
}

class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      displayScreen: CalculatorStore.getDisplayScreen()
=======
      displayScreen: calculatorStore.getDisplayScreen()
>>>>>>> first commit
    };

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
<<<<<<< HEAD
    CalculatorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CalculatorStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getCalculatorState());
=======
    calculatorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    calculatorStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getcalculatorState());
>>>>>>> first commit
  }
}

module.exports = Screen;
