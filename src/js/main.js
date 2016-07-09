/**
 * Created by Nomad_Mystic on 7/7/2016.
 */



import * as testingImport from './testExportModule';
import * as promises from './promises';


let {testingObjectCreation} = testingImport.testingFunction();

// part of the unit test experimentation
let numberArray = testingImport.buildArray(4);

let testingAJAX = promises.getURLPromise('/data/magicData.json').then(function(response) {
    console.log("Success!", response);
}, function(error) {
    console.error("Failed!", error);
});

console.log(numberArray);
console.log(testingObjectCreation.objectOne);


