"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction PostContent(props) {\n    const { post } = props;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: post.title,\n                image: imagePath\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Long\\\\Documents\\\\learn-nextjs-blog\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Long\\\\Documents\\\\learn-nextjs-blog\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Long\\\\Documents\\\\learn-nextjs-blog\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n        lineNumber: 12,\n        columnNumber: 12\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQztBQUVKO0FBQ1M7QUFHaEMsU0FBU0csWUFBWUMsS0FBSztJQUVyQyxNQUFNLEVBQUNDLElBQUksRUFBQyxHQUFHRDtJQUNmLE1BQU1FLFlBQVksaUJBQThCRCxPQUFiQSxLQUFLRSxJQUFJLEVBQUMsS0FBYyxPQUFYRixLQUFLRyxLQUFLO0lBRTFELHFCQUFPLDhEQUFDQztRQUFRQyxXQUFXUix5RUFBZTs7MEJBQ3RDLDhEQUFDRCxvREFBVUE7Z0JBQUNXLE9BQU9QLEtBQUtPLEtBQUs7Z0JBQUVKLE9BQU9GOzs7Ozs7MEJBQ3RDLDhEQUFDTixzREFBYUE7MEJBQUVLLEtBQUtNLE9BQU87Ozs7Ozs7Ozs7OztBQUVwQztLQVR3QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWNvbnRlbnQuanM/ZDhiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuXHJcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuL3Bvc3QtaGVhZGVyXCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9wb3N0LWNvbnRlbnQubW9kdWxlLmNzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Q29udGVudChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHtwb3N0fSA9IHByb3BzO1xyXG4gICAgY29uc3QgaW1hZ2VQYXRoID0gYC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7cG9zdC5pbWFnZX1gXHJcblxyXG4gICAgcmV0dXJuIDxhcnRpY2xlIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8UG9zdEhlYWRlciB0aXRsZT17cG9zdC50aXRsZX0gaW1hZ2U9e2ltYWdlUGF0aH0vPlxyXG4gICAgICAgIDxSZWFjdE1hcmtkb3duPntwb3N0LmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgPC9hcnRpY2xlPlxyXG59Il0sIm5hbWVzIjpbIlJlYWN0TWFya2Rvd24iLCJQb3N0SGVhZGVyIiwiY2xhc3NlcyIsIlBvc3RDb250ZW50IiwicHJvcHMiLCJwb3N0IiwiaW1hZ2VQYXRoIiwic2x1ZyIsImltYWdlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n"));

/***/ })

});