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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.js */ \"./src/mainpage.js\");\n\n\n(0,_mainpage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\n        // grabs the content by id\n        const content = document.getElementById('content');\n        //creates the header\n        const header = document.createElement('div');    \n        header.setAttribute('id','header');\n        content.appendChild(header);\n        //creates about Tab\n        const aboutTab = document.createElement('div');\n        aboutTab.setAttribute('id', 'tab')\n        aboutTab.innerHTML = \"About\";\n        header.appendChild(aboutTab);\n        //creates the logo    \n        const logo = document.createElement('img');\n        logo.setAttribute('id','logo');\n        logo.src = \"./assets/logo.png\";\n        header.appendChild(logo);\n        //creates menu tab\n        const menuTab = document.createElement('div');\n        menuTab.setAttribute('id', 'tab')\n        menuTab.innerHTML = \"Menu\";\n        header.appendChild(menuTab);\n        //creates the text section    \n        const about = document.createElement('div');\n        about.setAttribute('id','about');\n        content.appendChild(about);\n        const about_txt = document.createElement('div');\n        about_txt.setAttribute('id','about_txt');\n        about.appendChild(about_txt)\n        const about1 = document.createElement('div');\n        about1.setAttribute('id','about1');\n        about_txt.appendChild(about1);\n        const eclectic = document.createElement('div');\n        eclectic.innerHTML = 'Eclectic Food From Across The Globe';\n        about1.appendChild(eclectic);\n        const about2 = document.createElement('div');\n        about2.setAttribute('id','about2');    \n        const table = document.createElement('div');\n        table.innerHTML = 'Tables available by reservation only';\n        about2.appendChild(table);\n        const reservation = document.createElement('div')\n        reservation.innerHTML = 'To make a reservation please call 800-888-1234';\n        about2.appendChild(reservation);\n        about_txt.appendChild(about2);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant/./src/mainpage.js?");

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