/**
 * Created by Nomad_Mystic on 7/7/2016.
 */

// get styles into the project from webpack
require('../styles/styles.css');

import {userInputBlockOnSubmit, buildMagicBlockTableClickEvents} from './userInput';
// import * as testingImport from './testExportModule';
import * as promises from './promises';
import {buildMagicBlockTable, buildUserMagicBlock} from './templates';

// let {testingObjectCreation} = testingImport.testingFunction();

// part of the unit test experimentation
// let numberArray = testingImport.buildArray(4);


// when the user clicks to submit search of block
let submitBlock = document.getElementById('submitBlock');
let inputValueOnSubmit = submitBlock.addEventListener('click', () => {
    // returns filtered array of Magic blocks
    let inputValue = userInputBlockOnSubmit();

    // calls all magic sets and blocks from JSON
    let userMagicBlocks = promises.getURLPromise('/data/magicData.json').then(function(response) {
        // let userInputValue = buildUserMagicBlock(response, inputValue);

        buildUserMagicBlock(response, inputValue);
    }, function(error) {
        console.error("Failed!", error);
    });
    return userMagicBlocks;
});
// console.log(inputValue);




// INIT all sets on window load
window.addEventListener('load' , () => {
    // calls all magic sets and blocks from JSON on initial load
    let allMagicBlocks = promises.getURLPromise('/data/magicData.json').then(function(response) {
        // calls template fr population of the table on load
        buildMagicBlockTable(response);

        // build out the click events for each of the block on init
        buildMagicBlockTableClickEvents();

    }, function(error) {
        console.error("Failed!", error);
    });
}); // end window onLoad

console.log('Input value' + inputValueOnSubmit);

// console.log(numberArray);
// console.log(testingObjectCreation.objectOne);


