/**
 * Created by endof on 7/9/2016.
 */
import * as promises from './promises';
import {buildUserMagicBlock} from './templates';

export let userInputBlockOnSubmit = () => {

    // let inputValue = document.getElementById('inputBlock').value;
    return document.getElementById('inputBlock').value;


    // let inputValue = inputBlock.value;
    // return inputValue;
};

// When user clicks on table
export let buildMagicBlockTableClickEvents = () => {
    // create click event for when user clicks on one of the <td>'s
    let loadBlockOnTableClick = document.querySelectorAll('.initBlockTr');
    console.log(loadBlockOnTableClick);
    loadBlockOnTableClick.forEach((block) => {
        block.addEventListener('click', function(evnt) {
            console.log(evnt.target.innerText);
            let inputValue = evnt.target.innerText;
            promises.getURLPromise('/data/magicData.json').then(function(response) {
                
                buildUserMagicBlock(response, inputValue);
            }, function(error) {
                console.error("Failed!", error);
            }); // end promise
        });
    });
};