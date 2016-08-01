/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _userInput = __webpack_require__(2);
	
	var _promises = __webpack_require__(3);
	
	var promises = _interopRequireWildcard(_promises);
	
	var _templates = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Created by Nomad_Mystic on 7/7/2016.
	 */
	
	// get styles into the project from webpack
	__webpack_require__(5);
	// import * as testingImport from './testExportModule';
	
	
	// let {testingObjectCreation} = testingImport.testingFunction();
	
	// part of the unit test experimentation
	// let numberArray = testingImport.buildArray(4);
	
	// when the user clicks to submit search of block
	var submitBlock = document.getElementById('submitBlock');
	var inputValueOnSubmit = submitBlock.addEventListener('click', function () {
	    // returns filtered array of Magic blocks
	    var inputValue = (0, _userInput.userInputBlockOnSubmit)();
	
	    // calls all magic sets and blocks from JSON
	    var userMagicBlocks = promises.getURLPromise('/data/magicData.json').then(function (response) {
	        // let userInputValue = buildUserMagicBlock(response, inputValue);
	
	        (0, _templates.buildUserMagicBlock)(response, inputValue);
	    }, function (error) {
	        console.error("Failed!", error);
	    });
	    return userMagicBlocks;
	});
	// console.log(inputValue);
	
	// INIT all sets on window load
	window.addEventListener('load', function () {
	    // calls all magic sets and blocks from JSON on initial load
	    var allMagicBlocks = promises.getURLPromise('/data/magicData.json').then(function (response) {
	        // calls template fr population of the table on load
	        (0, _templates.buildMagicBlockTable)(response);
	
	        // build out the click events for each of the block on init
	        (0, _userInput.buildMagicBlockTableClickEvents)();
	    }, function (error) {
	        console.error("Failed!", error);
	    });
	}); // end window onLoad
	
	console.log('Input value' + inputValueOnSubmit);
	
	// console.log(numberArray);
	// console.log(testingObjectCreation.objectOne);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.buildMagicBlockTableClickEvents = exports.userInputBlockOnSubmit = undefined;
	
	var _promises = __webpack_require__(3);
	
	var promises = _interopRequireWildcard(_promises);
	
	var _templates = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Created by endof on 7/9/2016.
	 */
	var userInputBlockOnSubmit = exports.userInputBlockOnSubmit = function userInputBlockOnSubmit() {
	
	    // let inputValue = document.getElementById('inputBlock').value;
	    return document.getElementById('inputBlock').value;
	
	    // let inputValue = inputBlock.value;
	    // return inputValue;
	};
	
	// When user clicks on table
	var buildMagicBlockTableClickEvents = exports.buildMagicBlockTableClickEvents = function buildMagicBlockTableClickEvents() {
	    // create click event for when user clicks on one of the <td>'s
	    var loadBlockOnTableClick = document.querySelectorAll('.initBlockTr');
	    console.log(loadBlockOnTableClick);
	    loadBlockOnTableClick.forEach(function (block) {
	        block.addEventListener('click', function (evnt) {
	            console.log(evnt.target.innerText);
	            var inputValue = evnt.target.innerText;
	            promises.getURLPromise('/data/magicData.json').then(function (response) {
	
	                (0, _templates.buildUserMagicBlock)(response, inputValue);
	            }, function (error) {
	                console.error("Failed!", error);
	            }); // end promise
	        });
	    });
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by endof on 7/9/2016.
	 */
	
	var getURLPromise = exports.getURLPromise = function getURLPromise(url) {
	    // Return a new promise.
	    return new Promise(function (resolve, reject) {
	        // Do the usual XHR stuff
	        var req = new XMLHttpRequest();
	        req.open('GET', url);
	
	        req.onload = function () {
	            // This is called even on 404 etc
	            // so check the status
	            if (req.status == 200) {
	                // Resolve the promise with the response text
	                resolve(req.response);
	            } else {
	                // Otherwise reject with the status text
	                // which will hopefully be a meaningful error
	                reject(Error(req.statusText));
	            }
	        };
	
	        // Handle network errors
	        req.onerror = function () {
	            reject(Error("Network Error"));
	        };
	
	        // Make the request
	        req.send();
	    });
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by endof on 7/9/2016.
	 */
	
	var buildMagicBlockTable = exports.buildMagicBlockTable = function buildMagicBlockTable(response) {
	    // console.log(inputValue + ' inputValue');
	    var parseResponse = JSON.parse(response);
	    // console.log("Success!", parseResponse);
	
	    var magicTable = document.getElementById('magicTable');
	    var table = '';
	    parseResponse.children.forEach(function (magicSet) {
	        // console.log(magicSet);
	        table += '<tr class="initBlockTr">\n                <td class="' + magicSet.name + '">' + magicSet.name + '</td>\n            </tr>\n        ';
	    });
	
	    magicTable.innerHTML = table;
	};
	
	var buildUserMagicBlock = exports.buildUserMagicBlock = function buildUserMagicBlock(response, inputValue) {
	
	    if (response != null) {
	        (function () {
	            var parsedResponse = JSON.parse(response);
	            // remove on load table with user input
	            // console.log(inputValue);
	            var magicTable = document.getElementById('magicTable');
	            magicTable.innerHTML = '';
	            var table = '';
	
	            parsedResponse.children.forEach(function (magicBlock) {
	                // if the user input is the name of on of the
	                // magic blocks build template with their input
	                if (magicBlock.name === inputValue) {
	                    // console.log(magicBlock.children);
	                    // make the header of the table be user input
	                    var tableHeader = document.getElementById('tableHeader');
	                    tableHeader.innerText = '' + magicBlock.name;
	
	                    magicBlock.children.forEach(function (magicSet) {
	                        // console.log(magicSet.name);
	                        // removing special characters from the the sets name for URL
	                        var removeMagicSetSpecial = magicSet.name.replace(/[^a-zA-Z ]/g, '');
	                        // console.log(removeMagicSetSpecial);
	                        // Remove any places for the URL value
	                        var magicSetURL = removeMagicSetSpecial.replace(/\s+/g, '-').toLowerCase();
	                        table += '\n                    <tr>\n                        <td class="' + magicSet.name + '">\n                            <a href="http://magic.wizards.com/en/game-info/products/card-set-archive/' + magicSetURL + '" target="_blank">\n                                ' + magicSet.name + '\n                            </a>\n                        </td>\n                    </tr>\n                ';
	                    });
	                    magicTable.innerHTML = table;
	                }
	            });
	        })();
	    } else {}
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map