'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
<<<<<<< HEAD
import CalculatorConstants from '../constants/CalculatorConstants';

var CalculatorActions = {

  typeKey: function(keyType, keyValue) {
    AppDispatcher.dispatch({
      type: CalculatorConstants.KEY_TYPED,
=======
import calculatorConstants from '../constants/calculatorConstants';

var calculatorActions = {

  typeKey: function(keyType, keyValue) {
    AppDispatcher.dispatch({
      type: calculatorConstants.KEY_TYPED,
>>>>>>> first commit
      keyType: keyType,
      keyValue: keyValue
    });
  },

  typeFormula: function(formula) {
    AppDispatcher.dispatch({
<<<<<<< HEAD
      type: CalculatorConstants.FORMULA_TYPED,
=======
      type: calculatorConstants.FORMULA_TYPED,
>>>>>>> first commit
      formula: formula
    });
  }

};

<<<<<<< HEAD
module.exports = CalculatorActions;
=======
module.exports = calculatorActions;
>>>>>>> first commit
