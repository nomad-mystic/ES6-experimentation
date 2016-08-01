/**
 * Created by endof on 7/8/2016.
 */

import 'babel-polyfill'
// import buildArray from '../src/js/testExportModule';

// import mocha from 'mocha';
import Chai from 'chai';
// import * as exportModules from '../src/js/testExportModule';
import {buildUserMagicBlock} from '../src/js/templates';

// let mocha = require('mocha');

var assert = Chai.assert;

describe('Array', function() {

    // it('it should start empty', function() {
    //     var ary = [];
    //
    //     assert.equal(ary.length, 0);
    // }); // end it
    //
    // it('should be more than 3', function() {
    //     let numberArray = exportModules.buildArray(5);
    //     assert(numberArray.length > 3, 'Elements in a numberArray greater than 3');
    // });
    //
    // it('Should be more than 10', function() {
    //     let numberArrayLargerThenTen = exportModules.buildArray(11);
    //     assert(numberArrayLargerThenTen.length > 10, 'The array should be larger then ten');
    // });
});

describe('Template Testing', () => {

    it('It should not be empty', () => {
        let numberArrayLargerThenTen = exportModules.buildArray(11);
        assert(numberArrayLargerThenTen.length != 0, 'This should not be empty');
    });

    it('Input should have a length of more then 5 characters long', function() {
        let userInput = buildUserMagicBlock('Ice Age Block');
    });
});