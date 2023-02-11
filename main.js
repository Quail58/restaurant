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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction aboutPage() {\n    //creates the text section\n    const about1 = document.getElementById('about1').innerHTML = \"Thank you for taking interest in our restaurant\";     \n    const about2 = document.getElementById('about2').innerHTML = \"We dont want to reveal too much about our space.<br>Each visit is its own experience.\";\n\n    const removeChef = document.getElementById('chefKiss');\n    removeChef.parentNode.removeChild(removeChef);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.js */ \"./src/mainpage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n//creats the header for the page\n\n// function changePage(){\n//     const menu = document.getElementByClassName(\"menu\");\n//     menu.AddEventListener(\"click\", menuPage());\n\n//     const about = document.getElementByClassName(\"about\");\n//     about.AddEventListener(\"click\", aboutPage());\n\n//     const logo = document.getElementById(\"logo\");\n//     logo.AddEventListener(\"click\", home());\n// }\n\nfunction header() {\n    // grabs the content by id\n    const content = document.getElementById('content');\n\n    //creates the header\n    const header = document.createElement('div');    \n    header.setAttribute('id','header');\n    content.appendChild(header);\n\n        //creates about Tab under header\n        const aboutTab = document.createElement('div');\n        aboutTab.setAttribute('id', 'tab');\n        aboutTab.setAttribute('class','about');\n        aboutTab.innerHTML = \"About\";\n        aboutTab.addEventListener(\"click\", _about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        header.appendChild(aboutTab);\n\n        //creates the logo under header\n        const logo = document.createElement('img');\n        logo.setAttribute('id','logo');\n        logo.src = \"./assets/logo.png\";\n        logo.addEventListener(\"click\", _mainpage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        header.appendChild(logo);\n\n        //creates menu tab under header\n        const menuTab = document.createElement('div');\n        menuTab.setAttribute('id', 'tab');\n        menuTab.setAttribute('class', 'menu');\n        menuTab.innerHTML = \"Menu\";\n        menuTab.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        header.appendChild(menuTab);\n\n    //creates the about sections for content\n    const about = document.createElement('div');\n    about.setAttribute('id','about');\n    content.appendChild(about);\n\n    //creates the sections to add text to in the tabs\n    const about_txt = document.createElement('div');\n    about_txt.setAttribute('id','about_txt');\n    about.appendChild(about_txt);\n    const about1 = document.createElement('div');\n    about1.setAttribute('id','about1');\n    about_txt.appendChild(about1);        \n    const about2 = document.createElement('div');\n    about2.setAttribute('id','about2');    \n    about_txt.appendChild(about2);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.js */ \"./src/mainpage.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n\n\n\n//runs the header and about page on load\n(0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_mainpage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\n        //sets the innerHTML for the home section \n        const about1 = document.getElementById('about1').innerHTML = \"Eclectic Food From Across The Globe\";     \n        const about2 = document.getElementById('about2').innerHTML = \"Tables available by reservation only<br>To make a reservation please call 800-888-1234\";\n\n        const removeChef = document.getElementById('chefKiss');\n        removeChef.parentNode.removeChild(removeChef);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant/./src/mainpage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage() {\n        //creates the text section\n        const about1 = document.getElementById('about1').innerHTML = \"Our Menu is curated daily by Chef Doug Gibs\";     \n        const about2 = document.getElementById('about2').innerHTML = \"We can change the courses based on dietary restrictons if you let us know beforehand\";\n\n\n        const about = document.getElementById('about');\n        const chefKiss = document.createElement('img');\n        chefKiss.setAttribute('id','chefKiss')\n        chefKiss.src = './assets/chef.jpg';\n        about.appendChild(chefKiss);        \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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