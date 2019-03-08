'use strict';

import { Component } from 'react';
<<<<<<< HEAD
import CalculatorStore from '../stores/CalculatorStore';
import CalculatorActions from '../actions/CalculatorActions';

function getCalculatorState() {
  return {
    displayFormulae: CalculatorStore.getDisplayFormulae()
=======
import calculatorStore from '../stores/calculatorStore';
import calculatorActions from '../actions/calculatorActions';

function getcalculatorState() {
  return {
    displayFormulae: calculatorStore.getDisplayFormulae()
>>>>>>> first commit
  };
}

class Formulae extends Component {

  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      displayFormulae: CalculatorStore.getDisplayFormulae()
=======
      displayFormulae: calculatorStore.getDisplayFormulae()
>>>>>>> first commit
    };

    // Bind callback methods to make `this` the correct context.
    this.handleClick = this.handleClick.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
<<<<<<< HEAD
    CalculatorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CalculatorStore.removeChangeListener(this._onChange);
=======
    calculatorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    calculatorStore.removeChangeListener(this._onChange);
>>>>>>> first commit
  }

  dynamicClass(operator) {
    return 'group ' + operator;
  }

  handleClick(formula) {
<<<<<<< HEAD
    CalculatorActions.typeFormula(formula);
  }

  _onChange() {
    this.setState(getCalculatorState());
=======
    calculatorActions.typeFormula(formula);
  }

  _onChange() {
    this.setState(getcalculatorState());
>>>>>>> first commit
  }
}

module.exports = Formulae;
