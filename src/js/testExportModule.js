/**
 * Created by endof on 7/7/2016.
 */

import Rx from 'rx'

export let testingObserver = () => {

};


export let testingFunction = () => {

    // calling this function for main.js
    let helloWorld = () => {
        let testingString = 'Hello World';
        console.log(testingString);
    };
    helloWorld();

    // return object to main.js
    let testingObjectCreation = {
        objectOne: {
            'objectOneNumberOne': 1,
            'objectOneNumberSecond': 2,
            'objectOneNumberThird': 3
        },
        objectTwo: {
            'objectOneNumberOne': 1,
            'objectOneNumberSecond': 2,
            'objectOneNumberThird': 3
        }
    };
    return {testingObjectCreation}
};


export let buildArray = (number) => {

    var numberArray = [];
    var counter = '';
    for (var i=0; i < number; i++) {
        counter += number;
        numberArray.push(counter);
    }
    return numberArray;
};