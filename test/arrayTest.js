/**
 * Created by endof on 7/8/2016.
 */

import 'babel-polyfill'
// import buildArray from '../src/js/testExportModule';

// import mocha from 'mocha';
import chai from 'chai';
import * as exportModules from '../src/js/testExportModule';

// let mocha = require('mocha');

var assert = chai.assert;

describe('Array', function() {

    it('it should start empty', function() {
        var ary = [];

        assert.equal(ary.length, 0);
    }); // end it

    it('should be more then 3', function() {
        let numberArray = exportModules.buildArray(5);
        assert(numberArray.length > 4, 'Elements in a numberArray greater then 4');
    });

    it('Should be more then 10', function() {

    })
});