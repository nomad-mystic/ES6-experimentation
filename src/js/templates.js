/**
 * Created by endof on 7/9/2016.
 */



export let buildMagicDOM = (response) => {
    let parseResponse = JSON.parse(response);
    console.log("Success!", parseResponse);

    parseResponse.children.forEach((magicSet) => {
        console.log(magicSet);
    });
    let magicTable = document.getElementById('magicTable');
    
};