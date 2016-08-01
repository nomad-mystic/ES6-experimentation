/**
 * Created by endof on 7/9/2016.
 */



export let buildMagicBlockTable = (response) => {
    // console.log(inputValue + ' inputValue');
    let parseResponse = JSON.parse(response);
    // console.log("Success!", parseResponse);
    
    let magicTable = document.getElementById('magicTable');
    let table = '';
    parseResponse.children.forEach((magicSet) => {
        // console.log(magicSet);
        table += `<tr class="initBlockTr">
                <td class="${magicSet.name}">${magicSet.name}</td>
            </tr>
        `;
    });
    
    magicTable.innerHTML = table;
};


export let buildUserMagicBlock = (response, inputValue) => {

    if (response != null) {
        let parsedResponse = JSON.parse(response);
        // remove on load table with user input
        // console.log(inputValue);
        let magicTable = document.getElementById('magicTable');
        magicTable.innerHTML = '';
        let table = '';

        parsedResponse.children.forEach((magicBlock) => {
            // if the user input is the name of on of the
            // magic blocks build template with their input
            if (magicBlock.name === inputValue) {
                // console.log(magicBlock.children);
                // make the header of the table be user input
                let tableHeader = document.getElementById('tableHeader');
                tableHeader.innerText = `${magicBlock.name}`;

                magicBlock.children.forEach((magicSet) => {
                    // console.log(magicSet.name);
                    // removing special characters from the the sets name for URL
                    let removeMagicSetSpecial = magicSet.name.replace(/[^a-zA-Z ]/g, '');
                    // console.log(removeMagicSetSpecial);
                    // Remove any places for the URL value
                    let magicSetURL = removeMagicSetSpecial.replace(/\s+/g, '-').toLowerCase();
                    table += `
                    <tr>
                        <td class="${magicSet.name}">
                            <a href="http://magic.wizards.com/en/game-info/products/card-set-archive/${magicSetURL}" target="_blank">
                                ${magicSet.name}
                            </a>
                        </td>
                    </tr>
                `
                });
                magicTable.innerHTML = table;
            }
        });
    } else {

    }
};