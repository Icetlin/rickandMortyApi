/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/fetchCharsFromApi.js":
/*!**************************************!*\
  !*** ./src/api/fetchCharsFromApi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (url) => {\n    const response = await fetch(url);\n    return await response.json();\n});\n\n//# sourceURL=webpack://rickandmortyapi/./src/api/fetchCharsFromApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/fetchCharsFromApi.js */ \"./src/api/fetchCharsFromApi.js\");\n/* harmony import */ var _js_createPagingButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/createPagingButtons.js */ \"./src/js/createPagingButtons.js\");\n/* harmony import */ var _js_createCharsTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/createCharsTable.js */ \"./src/js/createCharsTable.js\");\n\n\n\n\n(async () => {\n    let chars = {};\n\n    const tablePlaceEl = document.querySelector('#table-place');\n    const buttonsPlaceEl = document.querySelectorAll('.buttons-place');\n\n    const render = async(page) => {\n        chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(page);\n    \n        const table = (0,_js_createCharsTable_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(chars);\n\n        tablePlaceEl.querySelector('table')?.remove();\n        tablePlaceEl.appendChild(table);\n    }\n     \n\n    buttonsPlaceEl.forEach((place) => {\n        const [nextPageButton, prevPageButton] = (0,_js_createPagingButtons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => {\n            render(chars.info.next);\n        }, () => {\n            render(chars.info.prev);\n        });\n\n        place.appendChild(prevPageButton);\n        place.appendChild(nextPageButton);        \n    })\n    \n    render('https://rickandmortyapi.com/api/character'); // render first page\n})()\n\n//# sourceURL=webpack://rickandmortyapi/./src/index.js?");

/***/ }),

/***/ "./src/js/createCharsTable.js":
/*!************************************!*\
  !*** ./src/js/createCharsTable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((chars) => {\n    const charsTable = document.createElement('table');\n    const charsTableBody = document.createElement('tbody');\n\n    for(let i = 0; i <= chars.results.length - 1; i++){\n        let charsTableRow = document.createElement('tr')\n        charsTableRow.innerHTML = chars.results[i].name\n        charsTableBody.append(charsTableRow)\n    }\n    \n    charsTable.append(charsTableBody)\n    return charsTable\n});\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/createCharsTable.js?");

/***/ }),

/***/ "./src/js/createPagingButtons.js":
/*!***************************************!*\
  !*** ./src/js/createPagingButtons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((\n    onNextPageClick,\n    onPrevPageClick, \n    nextName = 'next',\n    prevName = 'prev',\n) => {\n    const nextPageButton = document.createElement('button');\n    const prevPageButton = document.createElement('button');\n\n    nextPageButton.innerText = nextName;\n    prevPageButton.innerText = prevName;\n\n    nextPageButton.addEventListener('click', onNextPageClick);\n    prevPageButton.addEventListener('click', onPrevPageClick);\n\n    return [nextPageButton, prevPageButton];\n});\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/createPagingButtons.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;