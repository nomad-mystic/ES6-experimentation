/**
 * Created by Nomad_Mystic on 7/7/2016.
 */



$(function() {
    console.log('jQuery working right');
});

import * as testingImport from './testExportModule';
import * as promises from './promises';
import {buildMagicDOM} from './templates';

let {testingObjectCreation} = testingImport.testingFunction();

// part of the unit test experimentation
let numberArray = testingImport.buildArray(4);

let testingAJAX = promises.getURLPromise('/data/magicData.json').then(function(response) {
    buildMagicDOM(response)
}, function(error) {
    console.error("Failed!", error);
});

console.log(numberArray);
console.log(testingObjectCreation.objectOne);


