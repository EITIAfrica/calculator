'use strict';

<<<<<<< HEAD
describe('CalculatorActions', function() {
  var action;

  beforeEach(function() {
    action = require('../../../common/actions/CalculatorActions.js');
=======
describe('calculatorActions', function() {
  var action;

  beforeEach(function() {
    action = require('../../../common/actions/calculatorActions.js');
>>>>>>> first commit
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });

  it('should find "typeKey" action', function() {
    expect(action.typeKey).toBeDefined();
  });

  it('should find "typeFormula" action', function() {
    expect(action.typeFormula).toBeDefined();
  });
});
