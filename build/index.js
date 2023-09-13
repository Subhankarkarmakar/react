/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_input_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/input-text */ "./src/components/form/input-text.js");
/* harmony import */ var _form_input_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/input-dropdown */ "./src/components/form/input-dropdown.js");
/* harmony import */ var _form_input_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/input-radio */ "./src/components/form/input-radio.js");





const Form = () => {
  const name = "Subhankar";
  const age = 15;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_form_input_radio__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/form/input-dropdown.js":
/*!***********************************************!*\
  !*** ./src/components/form/input-dropdown.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InputDropdown = () => {
  const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('select an option');
  const [validationError, setValidationError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [submissionSuccess, setSubmissionSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (selectedOption === 'select an option') {
      setSubmissionSuccess(false);
      setValidationError('Please select a valid choice');
    } else {
      setValidationError('');
      setSubmissionSuccess(true);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setValidationError('');
    setSubmissionSuccess(false);
  }, [selectedOption]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-center items-center h-screen"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-gray-200 p-4 rounded-lg shadow-lg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: handleSubmit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "cars",
    className: "text-center font-bold mb-2"
  }, "Choose a car:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "cars",
    className: "w-full p-2 border border-gray-300 rounded focus:border-blue-500",
    value: selectedOption,
    onChange: e => setSelectedOption(e.target.value)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "select an option"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Volvo"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Mercedes"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Audi")), validationError && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-red-500"
  }, validationError), submissionSuccess && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-green-500"
  }, "Submission successful"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "my-2 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  }, "Submit")))));
};
/* harmony default export */ __webpack_exports__["default"] = (InputDropdown);

/***/ }),

/***/ "./src/components/form/input-radio.js":
/*!********************************************!*\
  !*** ./src/components/form/input-radio.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputRadio() {
  const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-center items-center h-screen"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bg-gray-200 p-4 rounded-lg shadow-lg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, "Select Your Gender: "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: "male",
    value: "Male",
    name: "gender"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "male"
  }, "Male"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: "female",
    value: "Female",
    name: "gender"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "female"
  }, "Female"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: "others",
    value: "Others",
    name: "gender"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "others"
  }, "Others"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    class: "block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  }, "Submit")))));
}
/* harmony default export */ __webpack_exports__["default"] = (InputRadio);

/***/ }),

/***/ "./src/components/form/input-text.js":
/*!*******************************************!*\
  !*** ./src/components/form/input-text.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputText; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputText(props) {
  //state varible for form data
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: '',
    age: '',
    country: '',
    submitted: false
  });
  const [nameError, setNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // for name errors setting state
  const [ageError, setAgeError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // age 
  const [isFormSubmitted, setIsFormSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // submittted or not

  //if input changes
  const handleInputChange = e => {
    //id means field name like name, age and value from the input 
    const {
      id,
      value
    } = e.target;

    //update formdata state with the new value for the fiels
    setFormData({
      ...formData,
      [id]: value
    }); //joining old and new value

    //validating age
    if (id === 'age') {
      const isNumeric = /^\d+$/.test(value);
      if (!isNumeric) {
        //if not do this-->
        setAgeError('Please enter a valid age (numeric value).');
      } else {
        //otherwise clear the error msg
        setAgeError('');
      }
    }
    //validating name
    else if (id === 'name') {
      //a rule for name validation
      if (value.length < 2) {
        //setting the error msg if not fulfilling this if
        setNameError('Name must be at least 2 characters long.');
      } else {
        //else clear msg
        setNameError('');
      }
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    // Check for validation errors
    if (nameError || ageError) {
      // There are validation errors, do not submit the form
      return;
    }

    // No validation errors, submit the form
    setIsFormSubmitted(true);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-center"
  }, "Hello, ", props.name, "!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-center items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: handleSubmit,
    className: "bg-gray-200 p-6 rounded-lg shadow-md w-80 text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "block mb-2"
  }, "Enter Your Name:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "name",
    onChange: handleInputChange,
    placeholder: props.name,
    className: "w-full py-2 px-3 mb-4 border rounded-md",
    required: true
  }), nameError && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-red-500"
  }, nameError), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "block mb-2"
  }, "Enter Your Age:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "age",
    onChange: handleInputChange,
    placeholder: props.age,
    className: "w-full py-2 px-3 mb-4 border rounded-md",
    required: true
  }), ageError && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-red-500"
  }, ageError), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "country",
    className: "block mb-2"
  }, "Enter Your Country:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "country",
    onChange: handleInputChange,
    placeholder: "India",
    className: "w-full py-2 px-3 mb-4 border rounded-md"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
  }, "Submit"), isFormSubmitted ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "my-2 text-green-600"
  }, "Success! Your form has been submitted.") : null)));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");




const App = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "App"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), document.getElementById('react-form'));
}();
/******/ })()
;
//# sourceMappingURL=index.js.map