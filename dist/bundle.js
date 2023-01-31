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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/fetchCharsFromApi.js */ \"./src/api/fetchCharsFromApi.js\");\n/* harmony import */ var _js_createPagingButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/createPagingButtons.js */ \"./src/js/createPagingButtons.js\");\n/* harmony import */ var _js_renderClicksOnChars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/renderClicksOnChars.js */ \"./src/js/renderClicksOnChars.js\");\n/* harmony import */ var _js_createBackButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/createBackButton.js */ \"./src/js/createBackButton.js\");\n/* harmony import */ var _js_charsPageRender_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/charsPageRender.js */ \"./src/js/charsPageRender.js\");\n\n\n\n\n\n(async () => {\n    //x \n    let chars = {};\n\n    const [nextPageButton, prevPageButton] = (0,_js_createPagingButtons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(async() => {\n        chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(chars.info.next)\n        ;(0,_js_charsPageRender_js__WEBPACK_IMPORTED_MODULE_4__.charsPageRender)(chars);\n    }, async() => {\n        chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(chars.info.prev);\n        (0,_js_charsPageRender_js__WEBPACK_IMPORTED_MODULE_4__.charsPageRender)(chars);\n    })\n\n    document.body.appendChild(prevPageButton);\n    document.body.appendChild(nextPageButton); \n    \n         \n    if (window.location.toString() === 'http://localhost:7777/page1' && !window.location.toString().includes('id') || window.location.toString() === 'http://localhost:7777/'){ // render main page\n        chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://rickandmortyapi.com/api/character');\n        (0,_js_charsPageRender_js__WEBPACK_IMPORTED_MODULE_4__.charsPageRender)(chars); \n        \n\n    } // main page render\n\n\n    if (window.location.toString().includes('page') && !window.location.toString().includes('id') && !window.location.toString().includes('page1')){ \n        chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://rickandmortyapi.com/api/character${window.location.search}`);\n        (0,_js_charsPageRender_js__WEBPACK_IMPORTED_MODULE_4__.charsPageRender)(chars); \n            \n\n    } // others pages render\n\n\n    if (window.location.toString().includes('id')){ \n        const currentCharPage = new URLSearchParams(window.location.toString()).get('http://localhost:7777/?page')\n        const currentCharId = new URLSearchParams(window.location.toString()).get('id');\n        \n        const backButton = (0,_js_createBackButton_js__WEBPACK_IMPORTED_MODULE_3__.createBackButton)(() => {\n            backButtonAction((`https://rickandmortyapi.com/api/character${window.location.search}`))\n        }, 'back to list')\n        document.body.append(backButton);\n\n\n        (0,_js_renderClicksOnChars_js__WEBPACK_IMPORTED_MODULE_2__.renderClicksOnChars)(`https://rickandmortyapi.com/api/character?page=${currentCharPage}`, currentCharId)\n    } // render characters\n    \n})()\n\n//# sourceURL=webpack://rickandmortyapi/./src/index.js?");

/***/ }),

/***/ "./src/js/backButtonAction.js":
/*!************************************!*\
  !*** ./src/js/backButtonAction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backButtonAction\": () => (/* binding */ backButtonAction)\n/* harmony export */ });\n/* harmony import */ var _api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/fetchCharsFromApi.js */ \"./src/api/fetchCharsFromApi.js\");\n/* harmony import */ var _charsPageRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charsPageRender.js */ \"./src/js/charsPageRender.js\");\n/* harmony import */ var _createPagingButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPagingButtons.js */ \"./src/js/createPagingButtons.js\");\n\n\n\nconst backButtonAction = async (page) => {\n    document.getElementById('backButton')?.remove()\n    history.back()\n\n    const [nextPageButton, prevPageButton] = (0,_createPagingButtons_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(async() => {\n        chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(chars.info.next)\n        ;(0,_charsPageRender_js__WEBPACK_IMPORTED_MODULE_1__.charsPageRender)(chars);\n    }, async() => {\n        chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(chars.info.prev);\n        (0,_charsPageRender_js__WEBPACK_IMPORTED_MODULE_1__.charsPageRender)(chars);\n    })\n\n    document.body.appendChild(prevPageButton);\n    document.body.appendChild(nextPageButton); \n\n    let chars = {};\n    chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(page);\n    (0,_charsPageRender_js__WEBPACK_IMPORTED_MODULE_1__.charsPageRender)(chars);\n} \n\n//# sourceURL=webpack://rickandmortyapi/./src/js/backButtonAction.js?");

/***/ }),

/***/ "./src/js/charsOriginOnClick.js":
/*!**************************************!*\
  !*** ./src/js/charsOriginOnClick.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onClickOrigin\": () => (/* binding */ onClickOrigin)\n/* harmony export */ });\n/* harmony import */ var _renderClicksOnChars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderClicksOnChars.js */ \"./src/js/renderClicksOnChars.js\");\n\nconst onClickOrigin = (event) => {\n\n    const charId = event.currentTarget.dataset.charId\n    \n    ;(0,_renderClicksOnChars_js__WEBPACK_IMPORTED_MODULE_0__.renderClicksOnChars)(`https://rickandmortyapi.com/api/character${window.location.search}`, charId)\n    history.pushState(null, '', `${window.location}&id=${charId}`);\n}\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/charsOriginOnClick.js?");

/***/ }),

/***/ "./src/js/charsPageRender.js":
/*!***********************************!*\
  !*** ./src/js/charsPageRender.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"charsPageRender\": () => (/* binding */ charsPageRender)\n/* harmony export */ });\n/* harmony import */ var _charsOriginOnClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charsOriginOnClick */ \"./src/js/charsOriginOnClick.js\");\n/* harmony import */ var _createCharsTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCharsTable.js */ \"./src/js/createCharsTable.js\");\n\n\nconst charsPageRender = (chars) => {\n    const table = (0,_createCharsTable_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(chars, _charsOriginOnClick__WEBPACK_IMPORTED_MODULE_0__.onClickOrigin);\n    document.body.querySelector('table')?.remove();\n    document.body.append(table)\n\n    history.replaceState(null, '', `/?page=${document.body.querySelector('table').dataset.originApiPage}`)\n\n}\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/charsPageRender.js?");

/***/ }),

/***/ "./src/js/createBackButton.js":
/*!************************************!*\
  !*** ./src/js/createBackButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBackButton\": () => (/* binding */ createBackButton)\n/* harmony export */ });\nconst createBackButton = (onClickAction, buttonName) => {\n\n    const backButton = document.createElement('button');\n    backButton.setAttribute('id','backButton')\n\n    backButton.innerHTML = buttonName;\n\n    backButton.addEventListener('click', onClickAction); \n\n    return backButton\n}\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/createBackButton.js?");

/***/ }),

/***/ "./src/js/createCharInfoTable.js":
/*!***************************************!*\
  !*** ./src/js/createCharInfoTable.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createBackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBackButton */ \"./src/js/createBackButton.js\");\n/* harmony import */ var _backButtonAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backButtonAction */ \"./src/js/backButtonAction.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((chars, charId, page) => {\n\n    const charInfoTable = document.createElement('table');\n    const charInfoTableBody = document.createElement('tbody');\n    let currentCharObject;\n    const backButton = (0,_createBackButton__WEBPACK_IMPORTED_MODULE_0__.createBackButton)(() => {\n        (0,_backButtonAction__WEBPACK_IMPORTED_MODULE_1__.backButtonAction)(page)\n    }, \n    'back to list')\n    document.body.append(backButton);\n\n    for(let objectId = 0; objectId <= chars.results.length - 1; objectId++){ //get clicked char info\n        if((chars.results[objectId]).id === Number(charId)){\n            currentCharObject = chars.results[objectId]\n        }\n    }\n\n    for(const [key, value] of Object.entries(currentCharObject)){ // fill char info table\n\n        let charInfoTableRow = document.createElement('tr');\n        let tableKeys = document.createElement('td');\n        let tableValues = document.createElement('td');\n\n        tableKeys.style.fontWeight = \"900\";\n\n\n        if(typeof(value) !== \"object\" && key !== 'image'){ // set string values\n            tableKeys.innerHTML = `${key}:`;\n            tableValues.innerHTML = value;\n        }\n        if(typeof(value) === 'object' && key !== 'image'){ // set object values\n            tableKeys.innerHTML = `${key}:`;\n            tableValues.innerHTML = `${(Object.values(value))[0]}`;\n        }\n        if(key === 'image'){ // set image values\n            tableKeys.innerHTML = `${key}:`;\n            const charImage = document.createElement('img');\n            charImage.src = value;\n            tableValues.append(charImage)\n        }\n\n\n        charInfoTableBody.append(tableKeys)\n        charInfoTableBody.append(tableValues)\n        charInfoTableBody.append(charInfoTableRow)\n    }\n\n    \n    charInfoTable.append(charInfoTableBody) \n    return charInfoTable\n});\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/createCharInfoTable.js?");

/***/ }),

/***/ "./src/js/createCharsTable.js":
/*!************************************!*\
  !*** ./src/js/createCharsTable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((chars, clickAction) => {\n    const charsTable = document.createElement('table');\n    const charsTableBody = document.createElement('tbody');\n\n    for(let i = 0; i <= chars.results.length - 1; i++){\n        let charsTableRow = document.createElement('tr')\n        charsTableRow.innerHTML = chars.results[i].name\n        charsTableRow.dataset.charId = chars.results[i].id\n        charsTableRow.addEventListener('click', clickAction)\n        charsTableBody.append(charsTableRow)\n    }\n    \n    const nextPageUrl = new URL(chars.info.next);\n    const nextPageNumber = new URLSearchParams(nextPageUrl.search).get('page');\n    const currentPageNumber = (Number(nextPageNumber) - 1).toString();\n    charsTable.dataset.originApiPage = currentPageNumber\n\n    charsTable.append(charsTableBody) \n    return charsTable\n});\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/createCharsTable.js?");

/***/ }),

/***/ "./src/js/createPagingButtons.js":
/*!***************************************!*\
  !*** ./src/js/createPagingButtons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((\n    onNextPageClick,\n    onPrevPageClick, \n    nextName = 'next',\n    prevName = 'prev',\n) => {\n    const nextPageButton = document.createElement('button');\n    const prevPageButton = document.createElement('button');\n\n    nextPageButton.innerText = nextName;\n    prevPageButton.innerText = prevName;\n\n    nextPageButton.addEventListener('click', onNextPageClick);\n    prevPageButton.addEventListener('click', onPrevPageClick);\n\n    return [nextPageButton, prevPageButton];\n});\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/createPagingButtons.js?");

/***/ }),

/***/ "./src/js/renderClicksOnChars.js":
/*!***************************************!*\
  !*** ./src/js/renderClicksOnChars.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderClicksOnChars\": () => (/* binding */ renderClicksOnChars)\n/* harmony export */ });\n/* harmony import */ var _createCharInfoTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCharInfoTable */ \"./src/js/createCharInfoTable.js\");\n/* harmony import */ var _api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/fetchCharsFromApi.js */ \"./src/api/fetchCharsFromApi.js\");\n\n\nconst renderClicksOnChars = async(page, charId) => {\n    \n    let chars = await (0,_api_fetchCharsFromApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(page);\n\n    document.body.querySelector('table')?.remove();\n    document.body.querySelectorAll('button').forEach(element => element.remove());\n\n\n    const table = (0,_createCharInfoTable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(chars, charId, page);\n    \n    document.body.appendChild(table); \n    \n    \n    \n}\n\n//# sourceURL=webpack://rickandmortyapi/./src/js/renderClicksOnChars.js?");

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