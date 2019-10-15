module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/blocks/jumbotron-fluid.js":
/*!**********************************************!*\
  !*** ./components/blocks/jumbotron-fluid.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/face */ "./components/images/face.js");
var _jsxFileName = "C:\\Users\\Rafael\\Projects\\next-wordpress-commerce\\components\\blocks\\jumbotron-fluid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const JumbotronFluid = () => {
  return __jsx("div", {
    className: "jumbotron jumbotron-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_images_face__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("h1", {
    className: "display-4 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Fluid jumbotron"), __jsx("p", {
    className: "lead text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "This is a modified jumbotron that occupies the entire horizontal space of its parent.")));
};

/* harmony default export */ __webpack_exports__["default"] = (JumbotronFluid);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _blocks_jumbotron_fluid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/jumbotron-fluid */ "./components/blocks/jumbotron-fluid.js");
var _jsxFileName = "C:\\Users\\Rafael\\Projects\\next-wordpress-commerce\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(_blocks_jumbotron_fluid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/images/face.js":
/*!***********************************!*\
  !*** ./components/images/face.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Rafael\\Projects\\next-wordpress-commerce\\components\\images\\face.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Face = () => {
  return __jsx("div", {
    className: "jsx-1233649317" + " " + "face-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "-10 -10 68 68",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnssvg: "http://www.w3.org/2000/svg",
    className: "jsx-1233649317" + " " + "face",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("defs", {
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "svg_38",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.91669",
    stopColor: "#ff7f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.9245",
    stopColor: "#9e4d01",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "svg_54",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.50262",
    stopColor: "#7f3f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.51434",
    stopColor: "#3f1e00",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#3f1e00",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "svg_55",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.42059",
    stopColor: "#ff7f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.44794",
    stopColor: "#ff7f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.487",
    stopColor: "#7f3d00",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.57294",
    stopColor: "#7f3d00",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#7f3d00",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "svg_56",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.38544",
    stopColor: "#7f3f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.40106",
    stopColor: "#3d1d00",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "svg_60",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.58466",
    stopColor: "#7f3f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.60809",
    stopColor: "#472200",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "svg_61",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.18622",
    stopColor: "#7f3f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.19012",
    stopColor: "#492300",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "svg_65",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.66278",
    stopColor: "#7f3f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.69794",
    stopColor: "#442100",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "svg_69",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0.01825",
    stopColor: "#7f3f00",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "0.03387",
    stopColor: "#472200",
    stopOpacity: "0.99609",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))), __jsx("g", {
    stroke: "null",
    className: "jsx-1233649317" + " " + "layer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Layer 1"), __jsx("g", {
    id: "svg_85",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("g", {
    id: "svg_86",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("g", {
    id: "svg_1",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("path", {
    d: "m4.338647,129.112034l-1.384615,258.923079l117.692308,63.692308c0,0 9.692308,6.923077 19.384616,0c9.692308,-6.923077 114.923078,-62.307693 114.923078,-62.307693c0,0 -2.769231,-270.000002 -2.769231,-270.000002c0,0 -249.230771,-2.769231 -249.230771,-2.769231c0,0 1.384615,12.461539 1.384615,12.461539z",
    fill: "url(#svg_38)",
    id: "svg_11",
    stroke: "url(#svg_55)",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("path", {
    d: "m102.64634,169.265881c0,0 1.384615,19.384616 1.384615,19.384616c0,0 -85.846154,-9.692308 -85.846154,-9.692308c0,0 84.461539,-9.692308 84.461539,-9.692308z",
    fill: "#7f3f00",
    id: "svg_14",
    stroke: "#7f3f00",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("path", {
    d: "m148.338648,165.112035c0,0 -2.769231,20.769231 -2.769231,20.769231c0,0 81.692308,-2.769231 81.692308,-2.769231c0,0 -78.923077,-18 -78.923077,-18z",
    fill: "#7f3f00",
    id: "svg_15",
    stroke: "url(#svg_69)",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("line", {
    fill: "none",
    id: "svg_20",
    stroke: "#7f3f00",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    x1: "123.415571",
    x2: "123.415571",
    y1: "231.573574",
    y2: "321.573574",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("line", {
    fill: "none",
    id: "svg_22",
    stroke: "#7f3f00",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    x1: "147.629448",
    x2: "124.090986",
    y1: "295.265882",
    y2: "318.804343",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("line", {
    fill: "none",
    id: "svg_23",
    stroke: "#7f3f00",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    x1: "108.860217",
    x2: "122.706371",
    y1: "304.181448",
    y2: "319.412217",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("path", {
    d: "m36.184801,203.163772c1.384615,15.759097 5.538462,42.428326 5.538462,42.428326c0,0 44.307693,1.212245 44.307693,1.212245c0,0 8.307692,-29.093719 5.538462,-42.428326c-2.769231,-13.334622 -55.384616,-1.212245 -55.384616,-1.212245z",
    fill: "#ffffff",
    id: "svg_25",
    stroke: "#512700",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "3",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("path", {
    d: "m152.209922,203.200035c1.384615,15.759097 5.538462,42.428326 5.538462,42.428326c0,0 44.307693,1.212245 44.307693,1.212245c0,0 8.307692,-29.093719 5.538462,-42.428326c-2.769231,-13.334622 -55.384616,-1.212245 -55.384616,-1.212245z",
    fill: "#ffffff",
    id: "svg_26",
    stroke: "#512700",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "3",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("path", {
    d: "m122.191072,334.507294c0,0 -71.23165,-7.203199 -71.23165,-7.203199c0,0 -19.208548,35.215643 -19.848877,34.735459c-0.640329,-0.480185 90.280178,-11.525151 89.639834,-12.005335c-0.640329,-0.480185 97.48339,7.683397 97.48339,7.683397c0,0 -7.203199,-33.614945 -7.843542,-34.095129c-0.640343,-0.480185 -88.199156,10.884808 -88.199156,10.884808z",
    fill: "#7f3f00",
    id: "svg_30",
    stroke: "url(#svg_61)",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("path", {
    d: "m91.777552,433.751403c0,0 28.812808,-18.408185 28.812808,-18.408185c0,0 8.003562,6.402849 8.003562,6.402849c0,0 8.003562,-9.604274 7.363219,-10.084459c-0.640343,-0.480185 28.652788,24.490856 28.652788,24.490856c0,0 -34.415294,35.215657 -35.055637,34.735459c-0.640343,-0.480185 -37.776739,-37.136534 -37.776739,-37.136534l0,0.000014z",
    fill: "#7f3f00",
    id: "svg_31",
    stroke: "url(#svg_56)",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("path", {
    d: "m122.991422,377.726499c0,0.800349 -12.005335,19.208534 -12.645679,18.728349c-0.640343,-0.480185 30.2535,0.480185 29.613157,0c-0.640343,-0.480185 -16.967492,-18.728349 -16.967492,-18.728349l0.000014,0z",
    fill: "#7f3f00",
    id: "svg_35",
    stroke: "url(#svg_60)",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("path", {
    d: "m3.599913,116.865444l3.780886,-41.487328l13.795062,7.152992l30.655689,-51.603743l10.218559,8.174852l49.0491,-26.568263l13.795062,8.685775l34.743116,-19.926194l20.948054,31.166626l10.729495,-11.240419l26.05734,43.939828l10.729495,-9.196712l20.948054,25.546403c0,0 3.372106,38.421762 3.372106,38.421762c0,0 -248.822019,-3.065566 -248.822019,-3.065566l0,-0.000014z",
    fill: "url(#svg_65)",
    id: "svg_53",
    stroke: "url(#svg_54)",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "66.353175",
    cy: "223.237164",
    fill: "#7f3f00",
    id: "svg_78",
    r: "10.97842",
    stroke: "#190c00",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "0.5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "66.45194",
    cy: "222.885444",
    fill: "#000000",
    id: "svg_79",
    r: "4.708194",
    stroke: "#512600",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "2.5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "179.802842",
    cy: "223.361364",
    fill: "#7f3f00",
    id: "svg_87",
    r: "10.97842",
    stroke: "#190c00",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "0.5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "179.901607",
    cy: "223.009644",
    fill: "#000000",
    id: "svg_88",
    r: "4.708194",
    stroke: "#512600",
    strokeDasharray: "null",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "2.5",
    className: "jsx-1233649317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1233649317",
    __self: undefined
  }, ".face.jsx-1233649317{display:block;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmFmYWVsXFxQcm9qZWN0c1xcbmV4dC13b3JkcHJlc3MtY29tbWVyY2VcXGNvbXBvbmVudHNcXGltYWdlc1xcZmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRXdCLEFBR21DLGNBQ0EsY0FDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxSYWZhZWxcXFByb2plY3RzXFxuZXh0LXdvcmRwcmVzcy1jb21tZXJjZVxcY29tcG9uZW50c1xcaW1hZ2VzXFxmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRmFjZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZhY2VcIiB2aWV3Qm94PVwiLTEwIC0xMCA2OCA2OFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc3N2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN2Z18zOFwiIHgxPVwiMFwiIHgyPVwiMVwiIHkxPVwiMFwiIHkyPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuOTE2NjlcIiBzdG9wQ29sb3I9XCIjZmY3ZjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuOTI0NVwiIHN0b3BDb2xvcj1cIiM5ZTRkMDFcIiBzdG9wT3BhY2l0eT1cIjAuOTk2MDlcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwic3ZnXzU0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC41MDI2MlwiIHN0b3BDb2xvcj1cIiM3ZjNmMDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC41MTQzNFwiIHN0b3BDb2xvcj1cIiMzZjFlMDBcIiBzdG9wT3BhY2l0eT1cIjAuOTk2MDlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzZjFlMDBcIiBzdG9wT3BhY2l0eT1cIjAuOTk2MDlcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwic3ZnXzU1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC40MjA1OVwiIHN0b3BDb2xvcj1cIiNmZjdmMDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC40NDc5NFwiIHN0b3BDb2xvcj1cIiNmZjdmMDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC40ODdcIiBzdG9wQ29sb3I9XCIjN2YzZDAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNTcyOTRcIiBzdG9wQ29sb3I9XCIjN2YzZDAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjN2YzZDAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN2Z181NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzg1NDRcIiBzdG9wQ29sb3I9XCIjN2YzZjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNDAxMDZcIiBzdG9wQ29sb3I9XCIjM2QxZDAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN2Z182MFwiIHgxPVwiMFwiIHgyPVwiMVwiIHkxPVwiMFwiIHkyPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNTg0NjZcIiBzdG9wQ29sb3I9XCIjN2YzZjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNjA4MDlcIiBzdG9wQ29sb3I9XCIjNDcyMjAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN2Z182MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMTg2MjJcIiBzdG9wQ29sb3I9XCIjN2YzZjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMTkwMTJcIiBzdG9wQ29sb3I9XCIjNDkyMzAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN2Z182NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNjYyNzhcIiBzdG9wQ29sb3I9XCIjN2YzZjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNjk3OTRcIiBzdG9wQ29sb3I9XCIjNDQyMTAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN2Z182OVwiIHgxPVwiMFwiIHgyPVwiMVwiIHkxPVwiMFwiIHkyPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMDE4MjVcIiBzdG9wQ29sb3I9XCIjN2YzZjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMDMzODdcIiBzdG9wQ29sb3I9XCIjNDcyMjAwXCIgc3RvcE9wYWNpdHk9XCIwLjk5NjA5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDxnIGNsYXNzTmFtZT1cImxheWVyXCIgc3Ryb2tlPVwibnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJzdmdfODVcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cInN2Z184NlwiLz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwic3ZnXzFcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNC4zMzg2NDcsMTI5LjExMjAzNGwtMS4zODQ2MTUsMjU4LjkyMzA3OWwxMTcuNjkyMzA4LDYzLjY5MjMwOGMwLDAgOS42OTIzMDgsNi45MjMwNzcgMTkuMzg0NjE2LDBjOS42OTIzMDgsLTYuOTIzMDc3IDExNC45MjMwNzgsLTYyLjMwNzY5MyAxMTQuOTIzMDc4LC02Mi4zMDc2OTNjMCwwIC0yLjc2OTIzMSwtMjcwLjAwMDAwMiAtMi43NjkyMzEsLTI3MC4wMDAwMDJjMCwwIC0yNDkuMjMwNzcxLC0yLjc2OTIzMSAtMjQ5LjIzMDc3MSwtMi43NjkyMzFjMCwwIDEuMzg0NjE1LDEyLjQ2MTUzOSAxLjM4NDYxNSwxMi40NjE1Mzl6XCIgZmlsbD1cInVybCgjc3ZnXzM4KVwiIGlkPVwic3ZnXzExXCIgc3Ryb2tlPVwidXJsKCNzdmdfNTUpXCIgc3Ryb2tlRGFzaGFycmF5PVwibnVsbFwiIHN0cm9rZUxpbmVjYXA9XCJudWxsXCIgc3Ryb2tlTGluZWpvaW49XCJudWxsXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xMDIuNjQ2MzQsMTY5LjI2NTg4MWMwLDAgMS4zODQ2MTUsMTkuMzg0NjE2IDEuMzg0NjE1LDE5LjM4NDYxNmMwLDAgLTg1Ljg0NjE1NCwtOS42OTIzMDggLTg1Ljg0NjE1NCwtOS42OTIzMDhjMCwwIDg0LjQ2MTUzOSwtOS42OTIzMDggODQuNDYxNTM5LC05LjY5MjMwOHpcIiBmaWxsPVwiIzdmM2YwMFwiIGlkPVwic3ZnXzE0XCIgc3Ryb2tlPVwiIzdmM2YwMFwiIHN0cm9rZURhc2hhcnJheT1cIm51bGxcIiBzdHJva2VMaW5lY2FwPVwibnVsbFwiIHN0cm9rZUxpbmVqb2luPVwibnVsbFwiIHN0cm9rZVdpZHRoPVwiNVwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMTQ4LjMzODY0OCwxNjUuMTEyMDM1YzAsMCAtMi43NjkyMzEsMjAuNzY5MjMxIC0yLjc2OTIzMSwyMC43NjkyMzFjMCwwIDgxLjY5MjMwOCwtMi43NjkyMzEgODEuNjkyMzA4LC0yLjc2OTIzMWMwLDAgLTc4LjkyMzA3NywtMTggLTc4LjkyMzA3NywtMTh6XCIgZmlsbD1cIiM3ZjNmMDBcIiBpZD1cInN2Z18xNVwiIHN0cm9rZT1cInVybCgjc3ZnXzY5KVwiIHN0cm9rZURhc2hhcnJheT1cIm51bGxcIiBzdHJva2VMaW5lY2FwPVwibnVsbFwiIHN0cm9rZUxpbmVqb2luPVwibnVsbFwiIHN0cm9rZVdpZHRoPVwiNVwiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCJub25lXCIgaWQ9XCJzdmdfMjBcIiBzdHJva2U9XCIjN2YzZjAwXCIgc3Ryb2tlRGFzaGFycmF5PVwibnVsbFwiIHN0cm9rZUxpbmVjYXA9XCJudWxsXCIgc3Ryb2tlTGluZWpvaW49XCJudWxsXCIgc3Ryb2tlV2lkdGg9XCI1XCIgeDE9XCIxMjMuNDE1NTcxXCIgeDI9XCIxMjMuNDE1NTcxXCIgeTE9XCIyMzEuNTczNTc0XCIgeTI9XCIzMjEuNTczNTc0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIm5vbmVcIiBpZD1cInN2Z18yMlwiIHN0cm9rZT1cIiM3ZjNmMDBcIiBzdHJva2VEYXNoYXJyYXk9XCJudWxsXCIgc3Ryb2tlTGluZWNhcD1cIm51bGxcIiBzdHJva2VMaW5lam9pbj1cIm51bGxcIiBzdHJva2VXaWR0aD1cIjVcIiB4MT1cIjE0Ny42Mjk0NDhcIiB4Mj1cIjEyNC4wOTA5ODZcIiB5MT1cIjI5NS4yNjU4ODJcIiB5Mj1cIjMxOC44MDQzNDNcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluZSBmaWxsPVwibm9uZVwiIGlkPVwic3ZnXzIzXCIgc3Ryb2tlPVwiIzdmM2YwMFwiIHN0cm9rZURhc2hhcnJheT1cIm51bGxcIiBzdHJva2VMaW5lY2FwPVwibnVsbFwiIHN0cm9rZUxpbmVqb2luPVwibnVsbFwiIHN0cm9rZVdpZHRoPVwiNVwiIHgxPVwiMTA4Ljg2MDIxN1wiIHgyPVwiMTIyLjcwNjM3MVwiIHkxPVwiMzA0LjE4MTQ0OFwiIHkyPVwiMzE5LjQxMjIxN1wiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMzYuMTg0ODAxLDIwMy4xNjM3NzJjMS4zODQ2MTUsMTUuNzU5MDk3IDUuNTM4NDYyLDQyLjQyODMyNiA1LjUzODQ2Miw0Mi40MjgzMjZjMCwwIDQ0LjMwNzY5MywxLjIxMjI0NSA0NC4zMDc2OTMsMS4yMTIyNDVjMCwwIDguMzA3NjkyLC0yOS4wOTM3MTkgNS41Mzg0NjIsLTQyLjQyODMyNmMtMi43NjkyMzEsLTEzLjMzNDYyMiAtNTUuMzg0NjE2LC0xLjIxMjI0NSAtNTUuMzg0NjE2LC0xLjIxMjI0NXpcIiBmaWxsPVwiI2ZmZmZmZlwiIGlkPVwic3ZnXzI1XCIgc3Ryb2tlPVwiIzUxMjcwMFwiIHN0cm9rZURhc2hhcnJheT1cIm51bGxcIiBzdHJva2VMaW5lY2FwPVwibnVsbFwiIHN0cm9rZUxpbmVqb2luPVwibnVsbFwiIHN0cm9rZVdpZHRoPVwiM1wiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMTUyLjIwOTkyMiwyMDMuMjAwMDM1YzEuMzg0NjE1LDE1Ljc1OTA5NyA1LjUzODQ2Miw0Mi40MjgzMjYgNS41Mzg0NjIsNDIuNDI4MzI2YzAsMCA0NC4zMDc2OTMsMS4yMTIyNDUgNDQuMzA3NjkzLDEuMjEyMjQ1YzAsMCA4LjMwNzY5MiwtMjkuMDkzNzE5IDUuNTM4NDYyLC00Mi40MjgzMjZjLTIuNzY5MjMxLC0xMy4zMzQ2MjIgLTU1LjM4NDYxNiwtMS4yMTIyNDUgLTU1LjM4NDYxNiwtMS4yMTIyNDV6XCIgZmlsbD1cIiNmZmZmZmZcIiBpZD1cInN2Z18yNlwiIHN0cm9rZT1cIiM1MTI3MDBcIiBzdHJva2VEYXNoYXJyYXk9XCJudWxsXCIgc3Ryb2tlTGluZWNhcD1cIm51bGxcIiBzdHJva2VMaW5lam9pbj1cIm51bGxcIiBzdHJva2VXaWR0aD1cIjNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTEyMi4xOTEwNzIsMzM0LjUwNzI5NGMwLDAgLTcxLjIzMTY1LC03LjIwMzE5OSAtNzEuMjMxNjUsLTcuMjAzMTk5YzAsMCAtMTkuMjA4NTQ4LDM1LjIxNTY0MyAtMTkuODQ4ODc3LDM0LjczNTQ1OWMtMC42NDAzMjksLTAuNDgwMTg1IDkwLjI4MDE3OCwtMTEuNTI1MTUxIDg5LjYzOTgzNCwtMTIuMDA1MzM1Yy0wLjY0MDMyOSwtMC40ODAxODUgOTcuNDgzMzksNy42ODMzOTcgOTcuNDgzMzksNy42ODMzOTdjMCwwIC03LjIwMzE5OSwtMzMuNjE0OTQ1IC03Ljg0MzU0MiwtMzQuMDk1MTI5Yy0wLjY0MDM0MywtMC40ODAxODUgLTg4LjE5OTE1NiwxMC44ODQ4MDggLTg4LjE5OTE1NiwxMC44ODQ4MDh6XCIgZmlsbD1cIiM3ZjNmMDBcIiBpZD1cInN2Z18zMFwiIHN0cm9rZT1cInVybCgjc3ZnXzYxKVwiIHN0cm9rZURhc2hhcnJheT1cIm51bGxcIiBzdHJva2VMaW5lY2FwPVwibnVsbFwiIHN0cm9rZUxpbmVqb2luPVwibnVsbFwiIHN0cm9rZVdpZHRoPVwiNVwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtOTEuNzc3NTUyLDQzMy43NTE0MDNjMCwwIDI4LjgxMjgwOCwtMTguNDA4MTg1IDI4LjgxMjgwOCwtMTguNDA4MTg1YzAsMCA4LjAwMzU2Miw2LjQwMjg0OSA4LjAwMzU2Miw2LjQwMjg0OWMwLDAgOC4wMDM1NjIsLTkuNjA0Mjc0IDcuMzYzMjE5LC0xMC4wODQ0NTljLTAuNjQwMzQzLC0wLjQ4MDE4NSAyOC42NTI3ODgsMjQuNDkwODU2IDI4LjY1Mjc4OCwyNC40OTA4NTZjMCwwIC0zNC40MTUyOTQsMzUuMjE1NjU3IC0zNS4wNTU2MzcsMzQuNzM1NDU5Yy0wLjY0MDM0MywtMC40ODAxODUgLTM3Ljc3NjczOSwtMzcuMTM2NTM0IC0zNy43NzY3MzksLTM3LjEzNjUzNGwwLDAuMDAwMDE0elwiIGZpbGw9XCIjN2YzZjAwXCIgaWQ9XCJzdmdfMzFcIiBzdHJva2U9XCJ1cmwoI3N2Z181NilcIiBzdHJva2VEYXNoYXJyYXk9XCJudWxsXCIgc3Ryb2tlTGluZWNhcD1cIm51bGxcIiBzdHJva2VMaW5lam9pbj1cIm51bGxcIiBzdHJva2VXaWR0aD1cIjVcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTEyMi45OTE0MjIsMzc3LjcyNjQ5OWMwLDAuODAwMzQ5IC0xMi4wMDUzMzUsMTkuMjA4NTM0IC0xMi42NDU2NzksMTguNzI4MzQ5Yy0wLjY0MDM0MywtMC40ODAxODUgMzAuMjUzNSwwLjQ4MDE4NSAyOS42MTMxNTcsMGMtMC42NDAzNDMsLTAuNDgwMTg1IC0xNi45Njc0OTIsLTE4LjcyODM0OSAtMTYuOTY3NDkyLC0xOC43MjgzNDlsMC4wMDAwMTQsMHpcIiBmaWxsPVwiIzdmM2YwMFwiIGlkPVwic3ZnXzM1XCIgc3Ryb2tlPVwidXJsKCNzdmdfNjApXCIgc3Ryb2tlRGFzaGFycmF5PVwibnVsbFwiIHN0cm9rZUxpbmVjYXA9XCJudWxsXCIgc3Ryb2tlTGluZWpvaW49XCJudWxsXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIm0zLjU5OTkxMywxMTYuODY1NDQ0bDMuNzgwODg2LC00MS40ODczMjhsMTMuNzk1MDYyLDcuMTUyOTkybDMwLjY1NTY4OSwtNTEuNjAzNzQzbDEwLjIxODU1OSw4LjE3NDg1Mmw0OS4wNDkxLC0yNi41NjgyNjNsMTMuNzk1MDYyLDguNjg1Nzc1bDM0Ljc0MzExNiwtMTkuOTI2MTk0bDIwLjk0ODA1NCwzMS4xNjY2MjZsMTAuNzI5NDk1LC0xMS4yNDA0MTlsMjYuMDU3MzQsNDMuOTM5ODI4bDEwLjcyOTQ5NSwtOS4xOTY3MTJsMjAuOTQ4MDU0LDI1LjU0NjQwM2MwLDAgMy4zNzIxMDYsMzguNDIxNzYyIDMuMzcyMTA2LDM4LjQyMTc2MmMwLDAgLTI0OC44MjIwMTksLTMuMDY1NTY2IC0yNDguODIyMDE5LC0zLjA2NTU2NmwwLC0wLjAwMDAxNHpcIiBmaWxsPVwidXJsKCNzdmdfNjUpXCIgaWQ9XCJzdmdfNTNcIiBzdHJva2U9XCJ1cmwoI3N2Z181NClcIiBzdHJva2VEYXNoYXJyYXk9XCJudWxsXCIgc3Ryb2tlTGluZWNhcD1cIm51bGxcIiBzdHJva2VMaW5lam9pbj1cIm51bGxcIiBzdHJva2VXaWR0aD1cIjVcIi8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNjYuMzUzMTc1XCIgY3k9XCIyMjMuMjM3MTY0XCIgZmlsbD1cIiM3ZjNmMDBcIiBpZD1cInN2Z183OFwiIHI9XCIxMC45Nzg0MlwiIHN0cm9rZT1cIiMxOTBjMDBcIiBzdHJva2VEYXNoYXJyYXk9XCJudWxsXCIgc3Ryb2tlTGluZWNhcD1cIm51bGxcIiBzdHJva2VMaW5lam9pbj1cIm51bGxcIiBzdHJva2VXaWR0aD1cIjAuNVwiLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI2Ni40NTE5NFwiIGN5PVwiMjIyLjg4NTQ0NFwiIGZpbGw9XCIjMDAwMDAwXCIgaWQ9XCJzdmdfNzlcIiByPVwiNC43MDgxOTRcIiBzdHJva2U9XCIjNTEyNjAwXCIgc3Ryb2tlRGFzaGFycmF5PVwibnVsbFwiIHN0cm9rZUxpbmVjYXA9XCJudWxsXCIgc3Ryb2tlTGluZWpvaW49XCJudWxsXCIgc3Ryb2tlV2lkdGg9XCIyLjVcIi8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTc5LjgwMjg0MlwiIGN5PVwiMjIzLjM2MTM2NFwiIGZpbGw9XCIjN2YzZjAwXCIgaWQ9XCJzdmdfODdcIiByPVwiMTAuOTc4NDJcIiBzdHJva2U9XCIjMTkwYzAwXCIgc3Ryb2tlRGFzaGFycmF5PVwibnVsbFwiIHN0cm9rZUxpbmVjYXA9XCJudWxsXCIgc3Ryb2tlTGluZWpvaW49XCJudWxsXCIgc3Ryb2tlV2lkdGg9XCIwLjVcIi8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTc5LjkwMTYwN1wiIGN5PVwiMjIzLjAwOTY0NFwiIGZpbGw9XCIjMDAwMDAwXCIgaWQ9XCJzdmdfODhcIiByPVwiNC43MDgxOTRcIiBzdHJva2U9XCIjNTEyNjAwXCIgc3Ryb2tlRGFzaGFycmF5PVwibnVsbFwiIHN0cm9rZUxpbmVjYXA9XCJudWxsXCIgc3Ryb2tlTGluZWpvaW49XCJudWxsXCIgc3Ryb2tlV2lkdGg9XCIyLjVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZTsiXX0= */\n/*@ sourceURL=C:\\Users\\Rafael\\Projects\\next-wordpress-commerce\\components\\images\\face.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Face);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Rafael\\Projects\\next-wordpress-commerce\\components\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Nav = () => {
  return __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Navbar"), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarColor03",
    "aria-controls": "navbarColor03",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarColor03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("ul", {
    className: "navbar-nav mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("li", {
    className: "nav-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Home ", __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "(current)"))), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Features")), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Pricing")), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "About")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./layout/layout.js":
/*!**************************!*\
  !*** ./layout/layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
var _jsxFileName = "C:\\Users\\Rafael\\Projects\\next-wordpress-commerce\\layout\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Woocommerce | Next Headless Cms"), __jsx("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/materia/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/layout */ "./layout/layout.js");
var _jsxFileName = "C:\\Users\\Rafael\\Projects\\next-wordpress-commerce\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx(_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "This is my layout"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rafael\Projects\next-wordpress-commerce\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map